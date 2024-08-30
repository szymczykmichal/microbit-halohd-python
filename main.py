haloDisplay = kitronik_halo_hd.create_zip_halo_display(60)

def on_forever():
    for indeks in range(60):
        haloDisplay.set_zip_led_color(indeks, kitronik_halo_hd.rgb(255, 0, 123))
        haloDisplay.show()
        basic.pause(10)
        haloDisplay.clear()
basic.forever(on_forever)
