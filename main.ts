let haloDisplay = kitronik_halo_hd.createZIPHaloDisplay(60)
basic.forever(function () {
    for (let indeks = 0; indeks <= 59; indeks++) {
        haloDisplay.setZipLedColor(indeks, kitronik_halo_hd.rgb(255, 0, 123))
        haloDisplay.show()
        basic.pause(10)
        haloDisplay.clear()
    }
})
