import React from 'react';
import chatImg from '../img/chatProjectImg.png'; // Import the image
import jsApiProject from '../img/jsApiProject.png';
import wsClient from '../img/webSocketClient.png';

function Hero() {
  return (

    <div  style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 23% 95%, 0 100%)' }}  className='bg-dark text-white'>
       <div class="container col-xxl-8 px-4 py-5">
       <h1 style={{ textAlignVertical: "center", textAlign: "center", }} className='display-3 fw-bold lh-1 mb-3 align-items-center'>Some of my Projects</h1>
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-6">
          <img src={jsApiProject} alt="Muhammet Yayla" style={{ padding: 10, borderRadius: 30 }} className="profile-img img-fluid " />
        </div>
        <div class="col-lg-6">
          <h1 class="display-7 fw-bold lh-1 mb-3">JS API Project</h1>
          <p class="lead">This project made with Html, Javascript, CSS, Boostrap and i used Openweather and api-ninjas.com for api. Website contains weather app, wheather map app, air pollution app , crypto info app, calculator app and finally movie app.</p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <a target='blank' href="https://muhammedyayla.github.io/Javascript-Api-Projects/Air%20Pollution%20App/airpollution.html">
              <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Website Link</button>
            </a>
            <a target='blank' href="https://github.com/muhammedyayla/Javascript-Api-Projects">
              <button type="button" class="btn btn-outline-secondary btn-lg px-4">Github Source Code</button>
            </a>
          </div>
        </div>
      </div>
     
        
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img src={chatImg} alt="Muhammet Yayla" style={{ padding: 10, borderRadius: 30 }} className="profile-img img-fluid " />
          </div>
          <div class="col-lg-6">
            <h1 class="display-7 fw-bold lh-1 mb-3">Realtime Chat nodejs-reactjs</h1>
            <p class="lead">Quickly design and customize responsive Realtime Chat Project with node.js. It also contains signup and login page for chatting.</p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <a target='blank' href="https://github.com/muhammedyayla/realtime-chat-nodejs-reactjs">
                <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Github Source code</button>
              </a>
            </div>
          </div>
        </div>

        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img src={wsClient} alt="Muhammet Yayla" style={{ padding: 10, borderRadius: 30 }} className="profile-img img-fluid " />
          </div>
          <div class="col-lg-6">
            <h1 class="display-7 fw-bold lh-1 mb-3">Web Socket Server & Client Website</h1>
            <p class="lead">This project made with Html, Javascript, css and node.js. The link will direct you to the github client page. Also you can download Websocket server source code and You can also set up a WebSocket server by following the steps in the readme file, and you can send a message to the WebSocket server address from the client page. If you like, you can also use the Postman application to check if the WebSocket server is working.</p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <a target='blank' href="https://muhammedyayla.github.io/Websocket-Client/client.html">
                <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">WebSocket Client</button>
              </a>
              <a target='blank' href="https://github.com/muhammedyayla/websocket-server-client">
              <button type="button" class="btn btn-outline-secondary btn-lg px-4">WebSocket Server</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>




  );
}

export default Hero;
