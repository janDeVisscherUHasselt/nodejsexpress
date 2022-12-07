# nodejsexpress
## Without docker
### In console
```
npm start
```
## With docker
### Build the image
```
docker build --tag node-docker .
```
### Run the image
```
docker run --publish 3000:3000 node-docker
```
