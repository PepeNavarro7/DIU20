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
                goal1: "Quiere hacer algo este finde",
                touch1: "calendario",
                feel1: "3",
                con1: "No se le ocurre qué hacer",
                ima1: "cartoon-planning.png",

                /*** PASO #2: DECICION ***/
                goal2: "Llama a sus amigos",
                touch2: "movil",
                feel2: "2",
                con2: "No se les ocurre ningún plan",
                ima2: "cartoon-phoning.png",

                /*** PASO #3: ACTUA ***/

                goal3: "Decide buscar en internet",
                touch3: "ordenador",
                feel3: "3",
                con3: "Le preocupa usar una web desconocida",
                ima3: "cartoon-PChard.png",

                /*** PASO #4: OBSERVA ***/

                goal4: "Usa una web que oferta planes",
                touch4: "ordenador (navegador)",
                feel4: "4",
                con4: "Buscar opciones en el lugar que había seleccionado, viendo precios y distancias, tiene que ver si hay aparcamiento fácil",
                ima4: "cartoon-PCSurprised.png",

                 /*** PASO #5: ANALIZA ***/

                goal5: "Encuentra varias opciones que encajan en sus preferencias",
                touch5: "ordenador (navegador)",
                feel5: "5",
                con5: "Tiene que decidir rápido antes de que se acaben las plazas",
                ima5: "cartoon-deciding.png",


                /*** PASO #6: CONCLUSION ***/

                goal6: "Reserva 4 plazas para sí y 3 amigos",
                touch6: "móvil(whatsapp)",
                feel6: "3",
                con6: "Tiene que convencer a sus amigos para que se unan",
                ima6: "cartoon-happy.png",

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
                touch1: "calendario",
                feel1: "3",
                con1: "No sabe cómo llegar a gente nueva",
                ima1: "cartoon-why.png",

                /*** PASO #2: DECISION ***/
                goal2: "Preguntar a sus allegados por ideas",
                touch2: "móvil (whastapp)",
                feel2: "2",
                con2: "En principio, a ninguno se le ocurre nada",
                ima2: "cartoon-phone-sitting.png",

                /*** PASO #3: ACTUA ***/

                goal3: "Uno de sus amigos le habla de una web de planes",
                touch3: "Móvil (llamada)",
                feel3: "3",
                con3: "No se fía de la web porque no la conoce",
                ima3: "cartoon-speaking.png",

                /*** PASO #4: OBSERVA ***/

                goal4: "Idea un plan de intercambio de idiomas en su gastrobar",
                touch4: "ordenador (navegador)",
                feel4: "4",
                con4: "No hay mucha información sobre cómo hacerlo",
                ima4: "cartoon-writting2.png",

                 /*** PASO #5: ANALIZA ***/

                goal5: "Oferta el plan en la web",
                touch5: "ordenador (navegador)",
                feel5: "2",
                con5: "Le pide muchos datos y le resulta incómodo completar formulario",
                ima5: "cartoon-PCangry.png",


                /*** PASO #6: CONCLUSION ***/

                goal6: "Mucha gente lo reserva",
                touch6: "Ordenador (reserva OK)",
                feel6: "5",
                con6: "Tendrá que preparar el local para toda la gente",
                ima6: "cartoon-shaking.png",



			}
		];

		$scope.model = $scope.Journeys[0];

	}])
