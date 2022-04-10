export function create360Viewer(elementId, filePath)
{
    pannellum.viewer(elementId, {
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