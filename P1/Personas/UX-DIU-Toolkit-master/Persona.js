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
				Name: "Travis Jordan",
				Photo: "Persona1.jpeg",
				Quote: "Hasta el mejor escribano echa un borrón",
				Age: 20,
				Occupation: "Estudiante de Bellas Artes",
				Family: "Madre soltera",
				Location: "Granada",
				Character: "Introvertido y soñador",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 2 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 4 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 2 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				],
				Goals: ["Publicar su propio manga", "Acabar la carrera", "Encontrar pareja"],
				Frustrations: ["Le cuesta salir de su zona de comfort", "No le gusta su carrera" ,"Está poco cómodo con gente nueva"],
				Bio: "Nació en Valencia, pero tiene ascencencia estadounidense. Llegó a Granada hace 2 años para estudiar  Bellas Artes. Le gusta dibujar, el manga y el anime, y los videojuegos. Gana dinero haciendo dibujos por encargo en la web",
				Tech: [
					{ Name: "TIC/Internet", Value: 4 },
					{ Name: "Movil", Value: 2 },
					{ Name: "RRSS", Value: 1 },
					{ Name: "Software", Value: 4 }

				],
                Contextos: "Quiere desarrollarse como dibujante y hacer nuevas amistades",
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
				Name: "Laura Revelles",
				Photo: "Persona2.jpeg",
				Quote: "Tempus fugit",
				Age: 48,
				Occupation: "Encargada de restaurante",
				Family: "Una hija",
				Location: "La Laguna (Tenerife)",
				Character: "Decidida, valiente y algo alocada",
				PersonalityTraits: [
					{ Name: "Introvertida/reservada Vs  Extrov/activa ", Value: 5 },
					{ Name: "Realista/práctica  Vs    Intuición/imaginativa", Value: 3 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsiva", Value: 4 },
					{ Name: "Flemática/apática  Vs   Colérica/visceral", Value: 2 }
				],
				Goals: ["Hacer feliz a su hija", "Sacar adelante su negocio", "Conocer gente nueva"],
				Frustrations: ["Tener una vida sedentaria","No pasar el suficiente tiempo con su hija","Envejecer"],
				Bio: "Laura nació en Cádiz, pero se fue a Tenerife tras conocer al padre de su hija. No tiene estudios, pero desde joven comenzó a trabajar tras los fogones. Con sus ahorros, montó un gastrobar, del cual es la encargada. En su tiempo libre, le gusta hacer senderismo y yoga, y pasar tiempo con su hija.",
				Tech: [
					{ Name: "TIC/Internet", Value: 2 },
					{ Name: "Mobile", Value: 3 },
					{ Name: "RRSS", Value: 4 },
					{ Name: "Software", Value: 1 }

				],
                Contextos:   "Quiere desconectar del trabajo y disfrutar de la naturaleza" ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 3 },
					{ Name: "Online & Social Media", Value: 4 },
					{ Name: "Recomendaciones & sugerencias", Value: 2 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])
