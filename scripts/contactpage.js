            
        mapboxgl.accessToken = 'pk.eyJ1Ijoic3VkaGFyc2hhbjI0IiwiYSI6ImNrZTJsYmRyMDBhZ2kyeHBkOHNsM3dqZ3gifQ.L5gjeNiWiuHQjCUlBrj3oQ';
        var map = new mapboxgl.Map({
            container: 'contact-map-exact',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [ 79.9865, 14.4426],
            zoom: 8
        });
    
        var marker = new mapboxgl.Marker()
            .setLngLat([ 79.9865, 14.4426 ])
            .addTo(map);
    
        map.addControl(new mapboxgl.NavigationControl());
    

        
        var canvas1 = document.getElementById("contact-canvas1");
        var canvas2 = document.getElementById("contact-canvas2");
    
        var ctx1 = canvas1.getContext("2d");
        var ctx2 = canvas2.getContext("2d");
      

        ctx1.beginPath();
        ctx1.arc(75,75,50,0,3 * Math.PI/2,true);
        ctx1.lineWidth = 10;
        ctx1.strokeStyle = 'rgba(210, 210, 210, 1)';
        ctx1.stroke();


        ctx2.beginPath();
        ctx2.arc(75,75,60,Math.PI * 0.01,3 * Math.PI/2,true);
        ctx2.lineWidth = 10;
        ctx2.strokeStyle = 'rgba(210, 210, 210, 1)';
        ctx2.stroke();
       