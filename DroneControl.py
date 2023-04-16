from vosk import Model, KaldiRecognizer
import pyaudio
from djitellopy import Tello
import cv2

tello = Tello()
tello.connect()

model = Model(r"C:\Users\shaur\Desktop\drone\vosk-model-small-en-us-0.15")
recognizer = KaldiRecognizer(model, 16000)

listening = False
mic = pyaudio.PyAudio()
def get_command():
    listening = True
    stream = mic.open(format=pyaudio.paInt16, channels=1, rate=16000, input=True, frames_per_buffer=8192)
    while listening:
        stream.start_stream()
        try:
            data=stream.read(4096)
            if recognizer.AcceptWaveform(data):
                result = recognizer.Result()
                response = result[14: -3]
                listening = False
                stream.close()
                return response
        except OSError:
            pass

def analyze_command(command):
    try:
        if command == "take off":
            tello.takeoff()
        elif command == "land":
            tello.land()
        elif command == "move up":
            tello.move_up(40)
        elif command == "move down":
            tello.move_down(40)
        elif command == "take a picture":
            tello.streamon()
            frame_read = tello.get_frame_read()
            cv2.imwrite("image.jpg", frame_read.frame)
        elif command == "get bottle inventory":
            tello.streamon()
            frame_read = tello.get_frame_read()
            tello.takeoff()
            #tello.move_up(50)
            tello.move_forward(75)
            # cv2.imwrite("6-1.png", frame_read.frame)
            tello.rotate_clockwise(90)
           # tello.move_forward(300)
            cv2.imwrite("bottles4.jpg", frame_read.frame)
            tello.move_left(35)
            tello.rotate_counter_clockwise(180)
            cv2.imwrite("books.jpg", frame_read.frame)
            #tello.move_forward(300)
            tello.rotate_clockwise(90)
            tello.move_forward(200)
            tello.rotate_clockwise(90)
            tello.move_forward(270)
            cv2.imwrite("bottles5.png", frame_read.frame)
            tello.rotate_clockwise(180)
            tello.move_forward(300)
            tello.rotate_counter_clockwise(90)
            tello.move_forward(250)
            tello.land()
        else:
            print("idek wdym")
    except Exception:
        pass


while True:
    print("Waiting for command...")
    command = get_command()
    analyze_command(command)
