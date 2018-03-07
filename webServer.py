#import socket module
from socket import *
import threading
import sys # In order to terminate the program

def read_in_chunks(file_object, chunk_size=1024): #This function comes from https://stackoverflow.com/questions/519633/lazy-method-for-reading-big-file-in-python
    """Lazy function (generator) to read a file piece by piece.
    Default chunk size: 1k."""
    while True:
        data = file_object.read(chunk_size)
        if not data:
            break
        yield data

def serveFile(filename):
    try:
        f = open(filename, 'rb')
        connectionSocket.send('HTTP/1.1 200 OK \r\n\r\n'.encode()) #Send one HTTP header line into socket
        for piece in read_in_chunks(f):
            connectionSocket.send(piece)
        connectionSocket.send("\r\n".encode())
        f.close() #Close the io stream.
        connectionSocket.close() #Close the client connection socket
    except IOError:
        f = open('404.html', 'r')
        connectionSocket.send('HTTP/1.1 404 Not Found \r\n\r\n'.encode())
        connectionSocket.send(f.read())
        f.close()
        connectionSocket.close()#Close the client connection socket

HOST = ''
PORT = 50040
serverSocket = socket(AF_INET, SOCK_STREAM)
serverSocket.bind(('', PORT))
serverSocket.listen(1)
print 'server ready to receive.'
while True:
    connectionSocket, addr = serverSocket.accept()
    print addr
    data = connectionSocket.recv(1024).decode() #expect HTTP request header
    message = data
    if message == '':
        continue #sometimes, blank messages come in.
    filename = message.split()[1]
    threading.Thread(target = serveFile, args=(filename[1:],)).run()
serverSocket.close()
sys.exit()
