const ma_api = "https://proxy-api-407662926597.us-central1.run.app/";

// Requests ids for the given search name
export const getIds = async (name) => {
  let headers = {
    'Content-Type': 'application/json'
  };

  let body = {
    query_by: "forename", 
    filter_by: "", 
    input: name,
    sort_by: "", 
    per_page: 50,
    page: 1,
  }

  let request = new Request(ma_api.concat("search/"), {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body),
  });

  const json = await fetch(request)
    .then(res => res.json())
    .catch(error => console.error(error));

  if(Object.keys(json).length === 0 || json.found < 1) {
    throw 'api returned no ids';
  }

  return json.hits
    .map(hit => hit.document.id)
    .map(id => id.split("_")[1]);
}

// Requests records for the provided ids
export const getRecords = async (ids) => {
  const headers = {
    'Content-Type': 'application/json'
  };

  const body = {
    ids: ids,
  }

  const request = new Request(ma_api.concat("bulk-get/"), {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body),
  });

  const json = await fetch(request)
    .then(res => res.json())
    .catch(error => console.error(error));
  
  return json.Responses.Cemetery.map(item => {
    return {
      id: item.SK, 
      forename: item.Forename, // "William",
      surname: item.Surname, // "Smith",
      serviceNumber: item.ServiceNumber, // "31064026",
      forceServiceBranch: item.ForceServiceBranch, // "U.S. Army",
      rank: item.Rank, // "Technician Fifth Grade",
      unit: item.Unit, // "53rd Infantry Battalion, 4th Armored Division",
      photo: item.Photo, // "https://memory-anchor-sam-bucket-1meqz3lj7g58t.s3.ca-central-1.amazonaws.com/cemetery/96515537b014e760b2ea6183bb1cffb5/burial/8913/05802791ac6814ce38c4f60dce928a0b.png",
      description: item.Description, // "William G. Smith served as a Technician Fifth Grade in the 53rd Infantry Battalion, 4th Armored Division of the U.S. Army. He entered service from Connecticut. On August 4th, 1944, during the course of World War II, Smith passed away. He was posthumously awarded the Purple Heart, a military decoration recognizing those wounded or killed while serving. Today, Smith rests at the Normandy American Cemetery, a solemn reminder of the global conflict that marked the mid-20th century.",
    }
  });
}