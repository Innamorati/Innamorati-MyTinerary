const estadoInicial = {
    ciudades: [],
    filtroSelect: [],
    datosFiltrados: [],
    ciudadDetalle: [],
    visivilidad: false,
}

const ReducerCiudades = (state = estadoInicial, action) => {
    switch (action.type) {
        case 'fetch':
            return {
                ...state,
                ciudades: action.payload,
                auxiliar: action.payload,
                filtroSelect: action.payload,
                datosFiltrados: action.payload,
            }

        case 'borrar':
            return {
                ...state,
                ciudades: action.payload,
            }

        case 'ObtenerUnaCiudad':
            return {
                ...state,
                ciudadDetalle: action.payload
            }
        case 'Filtro':
            let sinespacios = action.payload.parametro.toString().toLowerCase().split(" ").join("");
            let filtrando = action.payload.ciudades.filter((ciudades => ciudades.Ciudad.toString().toLowerCase().split(" ").join("").startsWith(sinespacios)))
            return {
                ...state,
                datosFiltrados: filtrando
            }
        case 'FiltroSelect':
            let Ciudades = action.payload.ciudades
            let Seleccionada = []
            switch (action.payload.seleccionado) {

                case 'America':
                    Seleccionada = Ciudades.filter((ciudades => ciudades.Continente = action.payload.seleccionado))
                    break;
                case 'Oceania':
                    Seleccionada = Ciudades.filter((ciudades => ciudades.Continente = action.payload.seleccionado))
                    break;
                case 'Europe':
                    Seleccionada = Ciudades.filter((ciudades => ciudades.Continente = action.payload.seleccionado))
                    break;
                case 'Africa':
                    Seleccionada = Ciudades.filter((ciudades => ciudades.Continente = action.payload.seleccionado))
                    break;
                case 'Asia':
                    Seleccionada = Ciudades.filter((ciudades => ciudades.Continente = action.payload.seleccionado))
                    break;

                case 'todos':
                    Seleccionada = Ciudades.map(ciudad => ciudad)
                    break;
            }

            return {
                ...state,
                filtroSelect: Seleccionada,
                datosFiltrados: Seleccionada,
            }
        case 'VisivilidadAlerta':
            let mostrar
            if (action.payload.longitud === 0) {
                mostrar = true
            }
            else {
                mostrar = false
            }
            return {
                ...state,
                visivilidad: mostrar
            }
        default:
            return state

    }
}
export default ReducerCiudades;