export function create360Viewer(elementId, filePath) {
    let viewer = pannellum.viewer(elementId, {
        "type": "equirectangular",
        "panorama": filePath,
        "autoLoad": true,
        // "hotSpots": [
        //     {
        //         "pitch": 14.1,
        //         "yaw": 1.5,
        //         "cssClass": "custom-hotspot",
        //         "createTooltipFunc": hotspot,
        //         "createTooltipArgs": "Baltimore Museum of Art"
        //     }
        // ],
        "showControls": false
    });

    let gyroscope = new Gyroscope({ frequency: 60 });

    gyroscope.addEventListener('reading', e => {
        let orientation = screen.orientation;

        if (orientation.type == "landscape-primary")
        {
            viewer.setPitch(viewer.getPitch() - (gyroscope.y), false);
            viewer.setYaw(viewer.getYaw() - (gyroscope.x), false);
        } 
        else if (orientation.type == "landscape-secondary")
        {
            viewer.setPitch(viewer.getPitch() + (gyroscope.y), false);
            viewer.setYaw(viewer.getYaw() + (gyroscope.x), false);
        }
        else if (orientation.type == "portrait-primary") 
        {
            
            viewer.setPitch(viewer.getPitch() + (gyroscope.x), false);
            viewer.setYaw(viewer.getYaw() - (gyroscope.y), false);
        }
        else if (orientation.type == "portrait-secondary")
        {
            viewer.setPitch(viewer.getPitch() - (gyroscope.x), false);
            viewer.setYaw(viewer.getYaw() + (gyroscope.y), false);
        }

        // $("#x").text("Angular velocity along the X-axis " + gyroscope.x);
        // $("#y").text("Angular velocity along the Y-axis " + gyroscope.y);
        // $("#z").text("Angular velocity along the Z-axis " + gyroscope.z);
        // $("#orientation").text(screen.orientation.type);
    });
    gyroscope.start();
}
// Hot spot creation function
function hotspot(hotSpotDiv, args) {
    hotSpotDiv.classList.add('custom-tooltip');
    var span = document.createElement('span');
    span.innerHTML = args;
    hotSpotDiv.appendChild(span);
    span.style.width = span.scrollWidth - 20 + 'px';
    span.style.marginLeft = -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + 'px';
    span.style.marginTop = -span.scrollHeight - 12 + 'px';
}