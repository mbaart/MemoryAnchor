# Veteran Search

Veteran Search is a searchable database of thousands of stories from veterans and their sacrifice for our freedoms.

## Description

Veteran Search is a React app using the Bootstrap framework for styling and Vite for fast lightweight builds. 

A second node instance hosts a lightweight express service processing requests from the frontend and external apis.

## Getting Started

### Requirements

* npm v10.9.1
* node v23.3.0

### Installing
```
# clone the repo
git clone https://github.com/mbaart/MemoryAnchor.git
cd MemoryAnchor/veteran-search && npm install
cd MemoryAnchor/backend && npm install
```

### Running

#### Development
```
# Open a split-terminal

# On terminal 1 run:
cd MemoryAnchor/veteran-search
npm run lint
npm run dev

# On terminal 2 run:
cd MemoryAnchor/backend
npm run dev
```

#### Build
```
# Open a split-terminal

# On terminal 1 run:
cd MemoryAnchor/veteran-search
npm run lint
npm run build
npm run preview

# On terminal 2 run:
cd MemoryAnchor/backend
npm run start
```

## Authors

* Michael Baart: [@LinkedIn](https://linkedin.com/michael-baart) [@GitHub](https://github.com/mbaart)

## Version History

* 0.0 - Initial Commit

## Future Work

* Advanced search functionality, eg. by surname, sorting, and filtering
* Pagination or infinite scroll
* Backend cache to cache api responses
* Backend logging
