const estadoInicial = {
    ciudades: [],
    auxiliar: [],
    filtroSelect: [],
    datosFiltrados: [],
    ciudadDetalle: [],
    continentes: [],
    visivilidad: false,
}

const ReducerCiudades = (state = estadoInicial, action) => {
    switch (action.type) {
        case 'fetch':
            let todosloscontinentes = action.payload?.map(ciudades => ciudades.Continente)
            let limpiar = new Set(todosloscontinentes)
            let continentes = [...limpiar]
            return {
                ...state,
                ciudades: action.payload,
                auxiliar: action.payload,
                filtroSelect: action.payload,
                datosFiltrados: action.payload,
                continentes: continentes,

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
        case 'selecFiltro':
            let Seleccionada = []
            let Ciudades = action.payload.ciudades
            let seleccion = action.payload.seleccionado
            switch (seleccion) {
                case 'America':
                    Seleccionada = Ciudades.filter((ciudades => ciudades.Continente === seleccion))
                    break;
                case 'Oceania':
                    Seleccionada = Ciudades.filter((ciudades => ciudades.Continente === seleccion))
                    break;
                case 'Europe':
                    Seleccionada = Ciudades.filter((ciudades => ciudades.Continente === seleccion))
                    break;
                case 'Africa':
                    Seleccionada = Ciudades.filter((ciudades => ciudades.Continente === seleccion))
                    break;
                case 'Asia':
                    Seleccionada = Ciudades.filter((ciudades => ciudades.Continente === seleccion))
                    break;

                case 'todos':
                    Seleccionada = Ciudades.filter(ciudades => ciudades)
                    break;
            }
            return {
                ...state,
                filtroSelect: Seleccionada,
                datosFiltrados: Seleccionada,
            }
        default:
            return state

    }
}
export default ReducerCiudades;