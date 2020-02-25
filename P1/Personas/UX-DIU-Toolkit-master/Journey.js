/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */
/*          [DIU] UX Toolkit               */
/*          ver 1.0, 2019                  */
/*******************************************/

/****  README:       */
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) {

		$scope.JourneyIndex = 0;

        $scope.Journeys = [
			{

                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/

				Id: 0,
				Name: "Travis Jordan",
                Photo: "Persona1.jpeg",

                /*** PASO #1: INSPIRACION ***/
                goal1: "Quiere un plan para  el fin de semana",
                touch1: "calendario",
                feel1: "4",
                con1: "Encontrar un plan que se adecúe a sus gustos",
                ima1: "cartoon-planning.png",

                /*** PASO #2: DECICION ***/
                goal2: "Decide ",
                touch2: "navegador (movil)",
                feel2: "2",
                con2: "No encuentra uno relacionado con sus intereses",
                ima2: "cartoon-PCangry.png",

                /*** PASO #3: ACTUA ***/

                goal3: "",
                touch3: "móvil (el tiempo)",
                feel3: "3",
                con3: "Está preocupado por el tiempo y el desplazamiento (coche y aparcamiento)",
                ima3: "cartoon-phone.png",

                /*** PASO #4: OBSERVA ***/

                goal4: "Busca en una web que oferta planes",
                touch4: "ordenador",
                feel4: "4",
                con4: "Buscar opciones en el lugar que había seleccionado, viendo precios y distancias, tiene que ver si hay aparcamiento fácil",
                ima4: "cartoon-PCtyping.png",

                 /*** PASO #5: ANALIZA ***/

                goal5: "Encuentra varias opciones que encajan en sus preferencias",
                touch5: "móvil (whatsapp)",
                feel5: "2",
                con5: "Llama a sus amigos (whatsapp no responen) para ver cual es su preferencia, tienen que reservar rápido por los precios",
                ima5: "cartoon-phoning.png",


                /*** PASO #6: CONCLUSION ***/

                goal6: "Reserva una plaza para sí mismo",
                touch6: "ordenador",
                feel6: "3",
                con6: "algunos amigos no confirmaron por lo que tuvo que seleccionar reserva con posibilidad de cancelación",
                ima6: "cartoon-resting.png",

			},
			{
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/

				Id: 1,
				Name: "Laura Revelles",
                Photo: "Persona2.jpeg",

				 /*** PASO #1: INSPIRACION ***/
                goal1: "Quiere organizar un plan para atraer gente nueva a su bar",
                touch1: "agenda",
                feel1: "3",
                con1: "No sabe cómo llegar a gente nueva",
                ima1: "cartoon-going.png",

                /*** PASO #2: DECISION ***/
                goal2: "Preguntar a sus allegados por ideas",
                touch2: "Servicio (agencia)",
                feel2: "2",
                con2: "Ninguno de sus amigos sabe cómo hacerlo",
                ima2: "cartoon-teamthinking.png",

                /*** PASO #3: ACTUA ***/

                goal3: "Uno de sus amigos le habla de una web de planes",
                touch3: "Móvil (llamada)",
                feel3: "3",
                con3: "No se fía de la web porque no la conoce",
                ima3: "cartoon-phoningangry.png",

                /*** PASO #4: OBSERVA ***/

                goal4: "Idea un plan de intercambio de idiomas en su gastrobar",
                touch4: "Móvil (webapp)",
                feel4: "2",
                con4: "No hay mucha información sobre cómo hacerlo",
                ima4: "cartoon-phone-street.png",

                 /*** PASO #5: ANALIZA ***/

                goal5: "Oferta el plan en la web",
                touch5: "Móvil (webapp)",
                feel5: "4",
                con5: "Le pide muchos datos y le resulta incómodo completar formulario",
                ima5: "cartoon-phone-sitting.png",


                /*** PASO #6: CONCLUSION ***/

                goal6: "Mucha gente lo reserva",
                touch6: "Ordenador (reserva OK)",
                feel6: "5",
                con6: "Tendrá que buscar más información del lugar para ver que actividades ofrece y donde aparacar!",
                ima6: "cartoon-PChard.png",



			}
		];

		$scope.model = $scope.Journeys[0];

	}])
