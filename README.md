
# Freether, a weather app for Acted test

This is a little weather application and a test for Acted

First of all, it was a very interesting test project to developp: I still a ‘beginner’ at Angular, so making a project like this one is a good training for me.

I’ve made this application with Angular 18.1.0

## Architecture

The architecture looks globally like this:

![alt text](https://github.com/flomenus/freether/blob/main/public/architecture.png?raw=true)
## Development
As u see, i kept most of the logic inside the App component. It is a very simple
application, so other developpers can find the logic easily in it.

I’ve used Input ,Output and EventEmitter methods from Angular to pass datas
and methods through components.

After a certain time of research, i chose to use the Open-Meteo API because it’s
simple, free and doesn’t require API key to use it.

After finishing the required part of the test, i implemented the possibility to
choose anothers weather locations. You can see it in the navbar at the top.


## Improvments
I think the webapp I made is quit good, but could be improved by:

- Show more weather data, like hourly datas for the day
- Improve style
- Use rxjs to avoid prop-drilling
- Testing components