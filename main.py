def on_received_number(receivedNumber):
    pins.servo_write_pin(AnalogPin.P1, receivedNumber)
    if receivedNumber < 0:
        pins.servo_write_pin(AnalogPin.P2, receivedNumber + receivedNumber * 2)
    else:
        pins.servo_write_pin(AnalogPin.P2, receivedNumber - receivedNumber * 2)
radio.on_received_number(on_received_number)

def on_received_string(receivedString):
    pins.servo_write_pin(AnalogPin.P1, 90)
    pins.servo_write_pin(AnalogPin.P2, 90)
radio.on_received_string(on_received_string)

def on_button_pressed_b():
    while True:
        if input.button_is_pressed(Button.A):
            radio.send_number(input.rotation(Rotation.ROLL) + 90)
        else:
            radio.send_string("nomal")
input.on_button_pressed(Button.B, on_button_pressed_b)

radio.set_group(12)
music.play_melody("C E C E C E C5 - ", 120)