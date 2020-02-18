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
				Quote: "Arriba España",
				Age: 32,
				Occupation: "Comercial en empresa de automocion",
				Family: "Abascal es mi padre",
				Location: "Granada (Huetor Vega)",
				Character: "Le gusta disfrutar del tiempo",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 4 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 1 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 3 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 5 }
				],
				Goals: ["Disfrutar del tiempo libre, viajar", "Cambiar a un trabajo más estable"],
				Frustrations: ["le gusta la tecnología, pero siempre 'llama a un amigo' para resolver problemas", "Le gustaría tener más tiempo libre y leer más"],
				Bio: "Es de Modril y vino a Granada para estudiar administración de empresas, pero no ha tenido grandes oportunidades de trabajo. LLeva 2 años contratado en la empresa actual. Aqui ha hecho buenos amigo en el trabajo y normalmente ser reunen para fiestas y a veces organizan viajes",
				Tech: [
					{ Name: "TIC/Internet", Value: 2 },
					{ Name: "Movil", Value: 2 },
					{ Name: "RRSS", Value: 3 },
					{ Name: "Software", Value: 2 }

				],
                Contextos: "LLeva un tiempo preocupado y quiere desconectar Le gustaría dar una sorpresa a sus amigos para las vacaciones",
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 5 },
					{ Name: "Online & Social Media", Value: 3 },
					{ Name: "Recomendaciones & sugerencias", Value: 2 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 1 }
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
				Age: 23,
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
				Goals: ["Desarrollarse como enfermera", "Afianzar sus amistades", "Vivir el máximo de experiencias posibles"],
				Frustrations: ["Sentirse con nada que hacer", "No conocer el sitio donde vive", "The problems with the solutions already available.", "The product or service which does not currently exist."],
				Bio: "The bio should be a short paragraph to describe the user journey. It should include some of their history leading up to a current use case. It may be helpful to incorporate information listed across the template and add pertinent details that may have been left out. Highlight factors of the user's personal and professional life that make this user an ideal customer of your product.",
				Tech: [
					{ Name: "TIC/Internet", Value: 2 },
					{ Name: "Mobile", Value: 3 },
					{ Name: "RRSS", Value: 4 },
					{ Name: "Software", Value: 1 }

				],
                Contextos:   "The goals this user hopes to achieve." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 5 },
					{ Name: "Online & Social Media", Value: 2 },
					{ Name: "Recomendaciones & sugerencias", Value: 2 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 2 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])
