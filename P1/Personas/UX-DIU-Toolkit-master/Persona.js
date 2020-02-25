/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */
/*          [DIU] UX Toolkit               */
/*          ver 1.0, 2019                  */
/*******************************************/

/****  README:       */
/****  Modifica los datos para las Personas      */
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) {

		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{

                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/


				Id: 0,
				Name: "Travis Bickle",
				Photo: "man.png",
				Quote: "Qué pereza",
				Age: 20,
				Occupation: "Estudiante",
				Family: "Madre soltera",
				Location: "Granada",
				Character: "Introvertido y soñador",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 1 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 4 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 2 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				],
				Goals: ["Disfrutar de sus aficiones", "Atreverse a probar nuevas experiencias"],
				Frustrations: ["Le cuesta salir de su zona de comfort", "Está poco cómodo con gente nueva"],
				Bio: "Es de Valencia, y vino a Granada hace 2 años a estudiar Bellas Artes. Le gusta dibujar, el manga y el anime, y los videojuegos. Quiere probar nuevas experiencias relacionadas con sus aficiones.",
				Tech: [
					{ Name: "TIC/Internet", Value: 4 },
					{ Name: "Movil", Value: 2 },
					{ Name: "RRSS", Value: 1 },
					{ Name: "Software", Value: 4 }

				],
                Contextos: "LLeva un tiempo desocupado y quiere descubrir cosas nuevas en Granada",
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 1 },
					{ Name: "Online & Social Media", Value: 4 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 2 }
				]
			},
			{

                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/


				Id: 1,
				Name: "Ellen Ripley",
				Photo: "Persona2.jpg",
				Quote: "Tempus fugit",
				Age: 26,
				Occupation: "Enfermera",
				Family: "Padres divorciados, una hermana y un sobrino",
				Location: "La Laguna (Tenerife)",
				Character: "Decidida, valiente y algo alocada",
				PersonalityTraits: [
					{ Name: "Introvertida/reservada Vs  Extrov/activa ", Value: 5 },
					{ Name: "Realista/práctica  Vs    Intuición/imaginativa", Value: 3 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsiva", Value: 4 },
					{ Name: "Flemática/apática  Vs   Colérica/visceral", Value: 2 }
				],
				Goals: ["Vivir el máximo de experiencias posibles", "Desarrollarse como enfermera", "Afianzar sus amistades"],
				Frustrations: ["Sentirse con nada que hacer", "No conocer el sitio donde vive", "Aburrirse"],
				Bio: "Ellen llegó hace unos meses a La Laguna, no conoce a mucha gente, y le gustaría descubrir nuevas actividades para realizar en su nueva ciudad. No tiene mucho tiempo libre por su trabajo, pero el poco que tiene lo aprovecha al máximo"
				Tech: [
					{ Name: "TIC/Internet", Value: 2 },
					{ Name: "Mobile", Value: 3 },
					{ Name: "RRSS", Value: 4 },
					{ Name: "Software", Value: 1 }

				],
                Contextos:   "Quiere desconectar y conocer más la isla." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 3 },
					{ Name: "Online & Social Media", Value: 2 },
					{ Name: "Recomendaciones & sugerencias", Value: 2 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])
