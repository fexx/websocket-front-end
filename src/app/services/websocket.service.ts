import {Injectable} from "@angular/core";

// var SockJs = require("sockjs-client");
// var Stomp = require("stompjs");

import * as SockJs from 'sockjs-client';
import * as Stomp from 'stompjs';


@Injectable()
export class WebSocketService {

    constructor() { }

    connect() {
        let socket = new SockJs(`http://localhost:8080/socket`);

        let stompClient = Stomp.over(socket);

        return stompClient;
    }
}