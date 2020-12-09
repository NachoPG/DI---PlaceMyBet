/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Principal from './screens/Principal';
import {name as appName} from './app.json';
import PaginaUsuario from './screens/PaginaUsuario';
import Login from './screens/Login';
import Menu from './screens/Menu';
import HistorialApuestas from './screens/HistorialApuestas';
import ConfiguracionUsuario from './screens/ConfiguracionUsuario';
import Informes from './screens/Informes';
import InformeCuotas from './screens/InformeCuotas';
import InformeFechas from './screens/InformeFechas';
import InformeMercados from './screens/InformeMercados';
import Categorias from './screens/Categorias';
import Eventos from './screens/Eventos';
import Apuesta from './screens/Apuesta';
import ConfirmarApuesta from './screens/ConfirmarApuesta';
import Cuota from './screens/Cuota';
import Fecha from './screens/Fecha';
import Mercado from './screens/Mercado';
import { Registro } from './screens/Registro';

AppRegistry.registerComponent(appName, () => Eventos );
