import './styles/style.css'
import { Controller } from './controller/Controller'
import { Model } from './model/Model'
import { MainView } from './view/MainView'

const app = new Controller(new MainView(), new Model())
;(async () => await app.init())()
