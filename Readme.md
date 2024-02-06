# Weather Forecasting

Weather forecasting application, will forecast the weather of 4 days of whichever city is selected.

You can add more cities by directly accessing API's since the interface is not there.

## Installation

1. Clone the Application

```
git clone https://github.com/PriyaBihani/WeatherApp_Nathabit.git
```

2. Create .env files for both client and server

server/.env

```
PORT=8000
MONGO_URI=YOUR_MONGODB_URI
NODE_ENV=development
WEATHER_API_KEY=YOUR_API_KEY #This is for making sure that city actually exists
```

client/.env

```
REACT_APP_WEATHER_API_KEY=YOUR_API_KEY
```

3. Run server

Go to project directory, then run:

```
cd server
npm i
npm run dev
```

4. Run Client

Go back to your project directory, then run:

```
cd client
npm run start
```

5. Adding cities endpoints

BASE_URL = `http://localhost:8000/api/locations`

Create = BASE_URL
body has

```
    body: {
        "name": "PLACE_NAME"
    }
```

Read = BASE_URL
Update = BASE_URL/id

```
    body: {
        "name": "UPDATED_NAME"
    }
```

Delete = BASE_URL/id
