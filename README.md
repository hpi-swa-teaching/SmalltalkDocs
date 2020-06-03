# SmalltalkDocs


## How to install

### Backend
```
Metacello new
	baseline: 'SmalltalkDocs';
	repository: 'github://hpi-swa-teaching/SmalltalkDocs:dev/packages';
	load.
```
### Frontend
Download the [build artifacts](https://github.com/sch-max/smaprat/suites/749775644/artifacts/7692015) and extract it (and its inner archive).

## How to start

### Start the backend

Run `SmapratApi newStarted` to start the Api on port 4567, or specify a port using `SmapratApi newStartedOn: <aPort>`. You can also use the RatPack Control Panel which can be found under Tools -> RatPack Control Panel.

### Start the frontend

Run `python -m SimpleHTTPServer` in the extracted folder. The frontend runs now on port 8000.
