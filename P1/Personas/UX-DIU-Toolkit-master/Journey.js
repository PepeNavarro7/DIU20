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
                goal1: "Quiere hacer algo este finde y llama a sus amigos",
                touch1: "movil",
                feel1: "3",
                con1: "No se les ocurre ningún plan",
                ima1: "cartoon-planning.png",

                /*** PASO #2: DECICION ***/
                goal2: "Decide buscar en internet y usa una web que oferta planes",
                touch2: "ordenador",
                feel2: "2",
                con2: "Le abruma el diseño de la web",
                ima2: "cartoon-PChard.png",

                /*** PASO #3: ACTUA ***/

                goal3: "Se registra en una web y se une a un par de grupos con intereses similares a los suyos",
                touch3: "ordenador",
                feel3: "4",
                con3: "No se fía del todo de los grupos, puesto que no los conoce",
                ima3: "cartoon-deciding.png",

                /*** PASO #4: OBSERVA ***/

                goal4: "Busca en la web algún evento que esté cerca suya",
                touch4: "ordenador",
                feel4: "2",
                con4: "La herramienta  de búsqueda es complicada y no se aclara con ella",
                ima4: "cartoon-thinking.png",

                 /*** PASO #5: ANALIZA ***/

                goal5: "Encuentra varias opciones de eventos que le vienen bien",
                touch5: "ordenador (navegador)",
                feel5: "4",
                con5: "No se atreve a ir sólo, así que avisa a un par de amigos",
                ima5: "cartoon-phoning.png",


                /*** PASO #6: CONCLUSION ***/

                goal6: "Reserva un plaza y comparte el enlace",
                touch6: "móvil(whatsapp)",
                feel6: "5",
                con6: "No se pueden resevar varias plazas a la vez",
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
                goal2: "Le hablan de diversas webs de planes comunes y decide investigarlo",
                touch2: "móvil (whatsapp)",
                feel2: "2",
                con2: "Hay muchas webs distintas, y ninguna es particularmente accesible",
                ima2: "cartoon-phone-sitting.png",

                /*** PASO #3: ACTUA ***/

                goal3: "Encuentra una web en la que puede organizar eventos en su bar y se registra",
                touch3: "ordenador",
                feel3: "3",
                con3: "Registrarse como host es arduo y cuesta dinero, y no sabe si merecerá la pena",
                ima3: "cartoon-writting2.png",

                /*** PASO #4: OBSERVA ***/

                goal4: "Idea un plan de intercambio de idiomas en su gastrobar, y lo oferta",
                touch4: "ordenador (navegador)",
                feel4: "4",
                con4: "Desconoce si va a llegar a mucha gente o poca, o cuánta gente usa la web",
                ima4: "cartoon-PCtyping.png",

                 /*** PASO #5: ANALIZA ***/

                goal5: "Varias personas comienzan a reservar plaza",
                touch5: "ordenador (navegador)",
                feel5: "5",
                con5: "Con cada reserva recibe un mail, lo que le satura el correo",
                ima5: "cartoon-speaking.png",


                /*** PASO #6: CONCLUSION ***/

                goal6: "Prepara su gastrobar para el evento",
                touch6: "Ordenador (reserva OK)",
                feel6: "4",
                con6: "No tiene forma real de saber cuánta gente realmente acudirá",
                ima6: "cartoon-shaking.png",



			}
		];

		$scope.model = $scope.Journeys[0];

	}])
