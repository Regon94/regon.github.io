chart= new NetChart({
    "navigation": {
        "focusNodeExpansionRadius": 2,
        "initialNodes": [
            "node1"
        ],
        "mode": "focusnodes"
    },
    "layout": {
        "mode": "radial",
        "nodeSpacing": 45
    },
    "style": {
        "node": {
            "display": "roundtext"
        }
    },
    "container": "demo",
    "data": [
        {
            "url": "/Mind_Map_Data.json"
        }
    ],
    "toolbar": {
        "fullscreen": true,
        "enabled": true
    },
    "interaction": {
        "resizing": {
            "enabled": false
        }
    }
})