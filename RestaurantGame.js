//=============
//COLOR PALETTE
//=============
var richBlack = "#0D1B2A";
var oxfordBlue = "#1B263B";
var yinmnBlue = "#415A77";
var silverLakeBlue = "#778DA9";
var platinum = "#E0E1DD";
var bonusGreen = "#00cc99";
var penaltyRed = "#b30000";

//=================================
//ADMIN FUNCTIONS AND VARIABLES
//=================================

	//--------------
	//Elem Variables
	//--------------
	var elem1;
	var elem2;
	var elem3;
	var elem4;
	
	//---------------------
	//Layout-Related Arrays
	//---------------------
	var tableItems =
	[
	document.getElementById("item3A"),
	document.getElementById("item3B"),
	document.getElementById("item3C"),
	document.getElementById("item3D")
	];
	
	var greetingGeneralLayoutArray = 
	[
	document.getElementById("tableOneGreetingButtons"),
	document.getElementById("tableTwoGreetingButtons"),
	document.getElementById("tableThreeGreetingButtons"),
	document.getElementById("tableFourGreetingButtons")
	];
	
	var greetingByNameLayoutArray =
	[
	document.getElementById("tableOneGreetByNameLayout"),
	document.getElementById("tableTwoGreetByNameLayout"),
	document.getElementById("tableThreeGreetByNameLayout"),
	document.getElementById("tableFourGreetByNameLayout")
	];
	
	var checkGeneralLayoutArray =
	[
	document.getElementById("tableOneCheckButtons"),
	document.getElementById("tableTwoCheckButtons"),
	document.getElementById("tableThreeCheckButtons"),
	document.getElementById("tableFourCheckButtons")
	];
	
	var checkByNameLayoutArray =
	[
	document.getElementById("tableOneCheckByNameLayout"),
	document.getElementById("tableTwoCheckByNameLayout"),
	document.getElementById("tableThreeCheckByNameLayout"),
	document.getElementById("tableFourCheckByNameLayout")
	];
	
	var orderAcknowledgementLayoutArray=
	[
	document.getElementById("tableOneOrderAcknowledgementLayout"),
	document.getElementById("tableTwoOrderAcknowledgementLayout"),
	document.getElementById("tableThreeOrderAcknowledgementLayout"),
	document.getElementById("tableFourOrderAcknowledgementLayout")
	];
	
	var flipBoxIDs = 
	[
	document.getElementById("flipBoxTableOne"),
	document.getElementById("flipBoxTableTwo"),
	document.getElementById("flipBoxTableThree"),
	document.getElementById("flipBoxTableFour")
	];
	
	var greetByNameInputs=
	[
	document.getElementById("tableOneGreetByNameInput"),
	document.getElementById("tableTwoGreetByNameInput"),
	document.getElementById("tableThreeGreetByNameInput"),
	document.getElementById("tableFourGreetByNameInput")
	];
	
	var checkByNameInputs=
	[
	document.getElementById("tableOneCheckByNameInput"),
	document.getElementById("tableTwoCheckByNameInput"),
	document.getElementById("tableThreeCheckByNameInput"),
	document.getElementById("tableFourCheckByNameInput")
	]; 
	
	var satisfactionBarArray=
	[
	document.getElementById("myBar1"),
	document.getElementById("myBar2"),
	document.getElementById("myBar3"),
	document.getElementById("myBar4")
	]
	
	//--------------------
	//Class Related Arrays
	//--------------------
	var classSelectors=
	[
	0,
	2,
	4,
	6
	];
	
	//-----------------------------------------------------
	//Text Bubble Array ("greenRight1", "blueLeft1", et al)
	//-----------------------------------------------------
	var textBubbleArray=
	[
		[
		"tableOneRight1",
		"tableOneLeft1",
		"tableOneRight2",
		"tableOneLeft2"
		],
		[
		"tableTwoRight1",
		"tableTwoLeft1",
		"tableTwoRight2",
		"tableTwoLeft2"
		],
		[
		"tableThreeRight1",
		"tableThreeLeft1",
		"tableThreeRight2",
		"tableThreeLeft2"
		],
		[
		"tableFourRight1",
		"tableFourLeft1",
		"tableFourRight2",
		"tableFourLeft2"
		],
		[
		"kitchenRight1",
		"kitchenRight2",
		"kitchenRight3",
		"kitchenRight4"
		]
	]
	
	//---------------
	//Customer Images
	//---------------
	var customerImageArrays = 
	[
	document.getElementById("tableOne"),
	document.getElementById("tableTwo"),
	document.getElementById("tableThree"),
	document.getElementById("tableFour")
	];

//=====================
//OTHER ADMIN FUNCTIONS
//=====================
	//-----------------------
	//Random Number Generator
	//-----------------------
	function getRandomInt(min, max)
	{
		return Math.floor(Math.random() * (max - min)) + min;
	}	
	
	//--------------------
	//Fisher Yates Shuffle
	//--------------------
		//-------------------------------
		//Fisher Yates Shuffle Deliveries
		//-------------------------------
		function fisherYatesShuffleFoodDeliveries()
		{
			for (z = foodDelivery.length -1; z > 0; z--) 
			{
			  j = Math.floor(Math.random() * z)
			  k = foodDelivery[z]
			  foodDelivery[z] = foodDelivery[j]
			  foodDelivery[j] = k
			}
		}

//=====
//Audio
//=====
	//----------------------
	//Button Sound Variables
	//----------------------
	var buttonClickSounds = 
	[
	document.getElementById("buttonClickSound1"),
	document.getElementById("buttonClickSound2")
	];
	
	var cardFlipSounds =
	[
	document.getElementById("cardFlipSound1"),
	document.getElementById("cardFlipSound2")
	];
	
	var rightSounds =
	[
	document.getElementById("rightSound1"),
	document.getElementById("rightSound2"),
	document.getElementById("rightSound3"),
	];
	
	var leftSounds =
	[
	document.getElementById("leftSound1"),
	document.getElementById("leftSound2"),
	document.getElementById("leftSound3"),
	];
	
	function playClickSound()
	{
		var clickSoundVariable = getRandomInt(0,2);
		var clickSound = buttonClickSounds[clickSoundVariable];
		clickSound.play();
	}
	
	function playCardFlipSound()
	{
		var cardFlipSoundVariable = getRandomInt(0,2);
		var cardFlipSound = cardFlipSounds[cardFlipSoundVariable];
		cardFlipSound.play();
	}
	
	function playRightSound()
	{
		var rightSoundVariable = getRandomInt(0,3);
		var rightSound = rightSounds[rightSoundVariable];
		rightSound.volume="0.025";
		rightSound.play();
	}
	
	function playLeftSound()
	{
		var leftSoundVariable = getRandomInt(0,3);
		var leftSound = leftSounds[leftSoundVariable];
		leftSound.volume="0.025";
		leftSound.play();
	}
	
	function playTipJarSound(setting)
	{
		var tipJarSoundVar = 1;
		var tipJarSound = document.getElementById("tipJarSound");
		tipJarSound.volume="0.5";
		if(setting=="Start")
		{
		tipJarSound.play();
		}
		else
		{
		tipJarSound.pause();
		}
	}
	
	//==============
	//FLIP FUNCTIONS
	//==============
	
		//============
		//Card Flipper
		//============
		function flipCard(table, side)
		{
			playCardFlipSound();
			var theTable = table;
			var theSide = side;
			
			//-------------------------------------------
			//First Check for 'Front' Flip or 'Back' Flip
			//-------------------------------------------
			if(theSide=="front")
			{
				var sideVar = ""
			}
			else if(theSide=="back")
			{
				var sideVar = "rotateY(180deg)";
			}
		
			
			//---------------------------
			//Then Check for the Location
			//---------------------------
			if(theTable=="theKitchen")
			{
			document.getElementById("flip-box-inner").style.transform=sideVar;
			}
			else
			{
				flipBoxIDs[theTable].style.transform=sideVar;
			}
		}
	
	//=======================
	//Customer Card Interface
	//=======================
	
		//--------------------------------------
		//Function to Blank Out Customer Replies
		//--------------------------------------
		function blankOutCustomerReply(tableNumber)
		{
			var theTableNumber = tableNumber;
			if(theTableNumber == 0)
			{
				document.getElementById("tableOneReply").innerHTML = "";
			}
			else if(theTableNumber == 1)
			{
				document.getElementById("tableTwoReply").innerHTML = "";
			}
			else if(theTableNumber == 2)
			{
				document.getElementById("tableThreeReply").innerHTML = "";
			}
			else(theTableNumber == 3)
			{
				document.getElementById("tableFourReply").innerHTML = "";
			}
		}
		
		//-------------------------------------
		//Function to Blank Out Customer Images
		//-------------------------------------
		function blankOutCustomerImage(tableNumber)
		{
			var theTableNumber = tableNumber;
		}
		
		//----------------------------------
		//Function to Blank Out Table Values
		//----------------------------------
		function blankOutTableValue(tableNumber)
		{
			var theTableNumber = tableNumber;
			tables[theTableNumber].Satisfaction=0;
			//This isn't set to red, because the reduction is just the customer departing, rather than a penalty for failure. 
			moveSatisfactionBar(theTableNumber,100,"Negative",silverLakeBlue);
		}

//==============
//2.) MENU ITEMS
//==============
//foodMenu[14]
customerOrders =
[

	//Food A
	foodA_Water={
		Name: "Water",
		Image: "Images/Food_Images/Food_Water.png",
		Article: "some"
	},
	
	//Food B
	foodB_Coffee={
		Name: "Coffee",
		Image: "Images/Food_Images/Food_Coffee.png",
		Article: "some"
	},
	
	//Food C
	foodC_Burrito={
		Name: "Burrito",
		Image: "Images/Food_Images/Food_Burrito.png",
		Article: "a"
	},
	
	//Food D
	foodD_Tea={
		Name: "Tea",
		Image: "Images/Food_Images/Food_Tea.png",
		Article: "some"
	},
	
	//Food E
	foodE_Soup={
		Name: "Soup",
		Image: "Images/Food_Images/Food_Soup.png",
		Article: "some"
	},
	
	//Food F
	foodF_Pasta={
		Name: "Pasta",
		Image: "Images/Food_Images/Food_Pasta.png",
		Article: "some"
	},
	
	//Food G
	foodG_Waffle={
		Name: "Waffle",
		Image: "Images/Food_Images/Food_Waffle.png",
		Article: "a"
	},
	
	//Food H
	foodH_Chicken={
		Name: "Turkey",
		Image: "Images/Food_Images/Food_Turkey.png",
		Article: "some"
	},
	
	//Food I
	foodI_Bread={
		Name: "Bread",
		Image: "Images/Food_Images/Food_Bread.png",
		Article: "some"
	},
	
	//Food J
	foodJ_Muffin={
		Name: "Muffin",
		Image: "Images/Food_Images/Food_Muffin.png",
		Article: "a"
	},
	
	//Food K
	foodK_Bagel={
		Name: "Bagel",
		Image: "Images/Food_Images/Food_Bagel.png",
		Article: "a"
	},
	
	//Food L
	foodL_Salad={
		Name: "Salad",
		Image: "Images/Food_Images/Food_Salad.png",
		Article: "a"
	},
	
	//Food M
	foodM_Potatoes={
		Name: "Potatoes",
		Image: "Images/Food_Images/Food_Potatoes.png",
		Article: "some"
	},
	
	//Food N
	foodN_Pizza={
		Name: "Pizza",
		Image: "Images/Food_Images/Food_Pizza.png",
		Article: "a slice of"
	},
	
	//Food O
	foodO_RhubarbPie={
		Name: "Pie",
		Image: "Images/Food_Images/Food_Pie.png",
		Article: "a slice of"
	}
]

//=============
//3.) CUSTOMERS
//=============

customers = [

	//CustomerA
	customerA={
		Name: "John",
		RememberedNameOne:null,
		RememberedNameTwo:null,
		Image: "Images/Customer_Images/Customer_John.png",
		Satisfaction: 50,
		Table:null
	},
	
	//CustomerB
	customerB={
		Name: "Mark",
		RememberedNameOne:null,
		RememberedNameTwo:null,
		Image: "Images/Customer_Images/Customer_Mark.png",
		Satisfaction: 50,
		Table:null
	},
	
	//CustomerC
	customerC={
		Name: "Walter",
		RememberedNameOne:null,
		RememberedNameTwo:null,
		Image: "Images/Customer_Images/Customer_Walter.png",
		Satisfaction: 50,
		Table:null
	},
	
	//CustomerD
	customerD={
		Name: "Marjorie",
		RememberedNameOne:null,
		RememberedNameTwo:null,
		Image: "Images/Customer_Images/Customer_Marjorie.png",
		Satisfaction: 50,
		Table:null
	},
	
	//CustomerE
	customerE={
		Name: "Phil",
		RememberedNameOne:null,
		RememberedNameTwo:null,
		Image: "Images/Customer_Images/Customer_Phil.png",
		Satisfaction: 50,
		Table:null
	},
	
	//CustomerF
	customerF={
		Name: "Edward",
		RememberedNameOne:null,
		RememberedNameTwo:null,
		Image: "Images/Customer_Images/Customer_Edward.png",
		Satisfaction: 50,
		Table:null
	},
	
	//CustomerG
	customerG={
		Name: "Lucy",
		RememberedNameOne:null,
		RememberedNameTwo:null,
		Image: "Images/Customer_Images/Customer_Lucy.png",
		Satisfaction: 50,
		Table:null
	},
	
	//CustomerH
	customerH={
		Name: "Frank",
		RememberedNameOne:null,
		RememberedNameTwo:null,
		Image: "Images/Customer_Images/Customer_Frank.png",
		Satisfaction: 50,
		Table:null
	},
	
	//CustomerI
	customerI={
		Name: "Maurice",
		RememberedNameOne:null,
		RememberedNameTwo:null,
		Image: "Images/Customer_Images/Customer_Maurice.png",
		Satisfaction: 50,
		Table:null
	},
	
	//CustomerJ
	customerJ={
		Name: "Mary",
		RememberedNameOne:null,
		RememberedNameTwo:null,
		Image: "Images/Customer_Images/Customer_Mary.png",
		Satisfaction: 50,
		Table:null
	},
	
	//Not Occupied
	NotOccupied={
		Name: null,
		RememberedNameOne: null,
		RememberedNameTwo: null,
		Satisfaction: null
	}
]


//==========
//4.) TABLES
//==========

//CXTable Variables
var C1Table = 0;
var C2Table = 0;
var C3Table = 0;
var C4Table = 0;

//CXVariable Variables
var C1Variable = 0;
var C2Variable = 0;
var C3Variable = 0;
var C4Variable = 0;

//CheckTable Variables
var check1Table = 0;
var check2Table = 0;
var check3Table = 0;
var check4Table = 0;

//ClassSelector Variables
//This is used to identify which 'Class' should be selected for the 'chat' functionality
var classSelector = 0;

//SatisfactionValues
const satisfactionStockValues=
[
50,
50,
50,
50
]

var tables =
[
	//Table 1 (tables[0])
	Table1={
		Name: null,
		RememberedNameOne:null,
		RememberedNameTwo:null,
		Image: null,
		Satisfaction: null,
		Order: null,
		OrderImage: null,
		Delivered: 0
	},
	
	//Table 2 (tables[1])
	Table2={
		Name: null,
		RememberedNameOne:null,
		RememberedNameTwo:null,
		Image: null,
		Satisfaction: null,
		Order: null,
		OrderImage: null,
		Delivered: 0
	},
	
	//Table 3 (tables[2])
	table3={
		Name: null,
		RememberedNameOne:null,
		RememberedNameTwo:null,
		Image: null,
		Satisfaction: null,
		Order: null,
		OrderImage: null,
		Delivered: 0
	},
	
	//Table 4 (tables[3])
	Table4={
		Name: null,
		RememberedNameOne:null,
		RememberedNameTwo:null,
		Image: null,
		Satisfaction: null,
		Order: null,
		OrderImage: null,
		Delivered: 0
	},
]
	
	//Start phaseCounter at '-1' so that it calculates first to zero.
	var phaseCounter=-1;
	var customerCounter=-1;
	
	var day=0;
	var theTextOutput="";
	//=========
	//Functions
	//=========
	
	//====
	//Tips
	//====
	var tips=0;
	
		//--------------------------
		//Function 0: Start Next Day
		//---------------------------
		function startNextDay()
		{
			phaseCounter=-1;
			updateKitchenBar(silverLakeBlue, "Awaiting Orders");
			document.getElementById("theKitchenImage").src="Images/Restaurant_Images/ClosedSign.png";
			document.getElementById("openButton").style.display="inline";
			setInterval(flashOpenButton,2000);
			//advanceTime();
		}
		
		//-------------
		//Navigate Back
		//-------------
		function goBack(round, table)
		{
			var theRound = round;
			var theTable = table;
			if(theRound=="customerGreetings")
			{
				greetingGeneralLayoutArray[theTable].style.display="inline";
				greetingByNameLayoutArray[theTable].style.display="none";
			}
			else if(theRound=="customerChecks")
			{
				checkGeneralLayoutArray[theTable].style.display="inline";
				checkByNameLayoutArray[theTable].style.display="none";
			}
		};
	
		//------------------------
		//Function 1: Advance Time
		//------------------------
		function advanceTime()
		{
			phaseCounter++;
				if(phaseCounter==0)
				{
					day++;
					document.getElementById("theDay").innerHTML="Day " + day;
					clearInterval(intervalFlashOpenButton);
					setTimeout(populateCustomer,500,0);
					advanceBreadcrumbs(silverLakeBlue, yinmnBlue, platinum, "3s", "stageBox", 0)
					advanceBreadcrumbs(platinum, platinum, richBlack, "3s", "stageBox", 1)
					advanceBreadcrumbs(platinum, platinum, richBlack, "3s", "stageBox", 2)
					advanceCheckMarks(0,"Clear");
					updateKitchenBar(oxfordBlue, "Taking Customer Orders");
				}
				else if(phaseCounter==1)
				{
					makeFood();
					advanceBreadcrumbs(silverLakeBlue, yinmnBlue, platinum, "5s", "stageBox", phaseCounter)
					advanceCheckMarks(0);
				}
				else if(phaseCounter==2)
				{
					advanceBreadcrumbs(silverLakeBlue, yinmnBlue, platinum, "5s", "stageBox", phaseCounter);
					advanceCheckMarks(1);
					updateKitchenBar(silverLakeBlue, "Kitchen Closed","Images/Restaurant_Images/ClosedSign.png");
				}
				else if(phaseCounter==3)
				{
					advanceCheckMarks(2);
					setTimeout(startNextDay,1000);
				}
		}
		
		//-------------------
		//Advance Breadcrumbs
		//-------------------
		function advanceBreadcrumbs(color, returnColor, fontColor, duration, selector, counterVariable)
		{
			//Create the Private Variables
			var theColor = color;
			var theFontColor = fontColor;
			var theReturnColor = returnColor;
			var theDuration = duration;
			var classSelector = selector;
			var theCounter = counterVariable;
			var start = 0;
			var end = 10;
			var elem = document.getElementsByClassName(classSelector);
			
			//Set the Interval
			var id = setInterval(frame, 100);
			
			//Now Fire the Function
			function frame() {
				if (start >= end) {
				clearInterval(id);
				start = 0;
				elem[theCounter].style.backgroundColor = returnColor;
				elem[theCounter].style.boxShadow = "none";
				elem[theCounter].style.transitionDuration = theDuration;
				} else {
				start++; 
				elem[theCounter].style.backgroundColor = theColor;
				elem[theCounter].style.color = theFontColor;
				elem[theCounter].style.boxShadow = "5px 5px 5px black";
				elem[theCounter].style.transitionDuration = theDuration;
				}
			}
		}
		
		
		//-------------------
		//Advance Check Marks
		//-------------------
		function advanceCheckMarks(checkCounter, clear)
		{
			var checkMark = document.getElementsByClassName("stageBoxCheck");
			if(clear=="Clear")
			{
				checkMark[0].style.visibility="hidden";
				checkMark[1].style.visibility="hidden";
				checkMark[2].style.visibility="hidden";
			}
			else
			{
				checkMark[checkCounter].style.visibility="visible";
			}
		}
		
		//------------------
		//Flash Button Color
		//------------------
		var intervalFlashOpenButton = setInterval(flashOpenButton,2000);
		function flashOpenButton()
		{
			//Create the Private Variables
			if(phaseCounter==-1)
			{
				var start = 0;
				var end = 10;
				var elem = document.getElementById("openButton");
				
				//Set the Interval
				var id = setInterval(frame, 100);
				
				//Now Fire the Function
				function frame() 
				{
					if (start >= end) {
					clearInterval(id);
					start = 0;
					elem.style.backgroundColor = yinmnBlue;
					elem.style.boxShadow = "0 1vh #2d3f52";
					elem.style.transitionDuration = "1s";
					} 
					else 
					{
					start++; 
					elem.style.backgroundColor = silverLakeBlue;
					elem.style.boxShadow = "0 1vh #586f8d";
					elem.style.transitionDuration = "1s";
					}
				}
			}
			else
			{
			}
		}
	//==============================================
	//==============================================
	//Welcoming Customers - Administrative Functions
	//==============================================
	//==============================================
	
		//-------------------------------
		//Function to Move the Status Bar
		//-------------------------------
		function updateSatisfaction(table)
		{
			var theTable = table;
			moveSatisfactionBar(theTable, 0, "Positive", oxfordBlue);
		}
	
		//-----------------
		//Populate Customer
		//-----------------
		function populateCustomer(count)
		{
			var theCount = count;
			//-------
			//Table 1
			//-------
			if(theCount==0)
			{
				customerCounter++;
				C1Variable = getRandomInt(0,customers.length-1);
				C1Table = getRandomInt(0,4);
				tables[C1Table].Name=customers[C1Variable].Name;
				tables[C1Table].Image=customers[C1Variable].Image;
				tables[C1Table].Satisfaction=customers[C1Variable].Satisfaction;
				satisfactionStockValues[C1Table]=0;
				updateSatisfaction(C1Table);
				//Populate the Table Accordingly
				if(C1Table==0)
				{
					flipCard(0, "back");
					document.getElementById("tableOne").src = tables[C1Table].Image;
					document.getElementById("tableOneGreetingButtons").style.display="inline";
				}
				
				else if(C1Table==1)
				{
					flipCard(1, "back");
					document.getElementById("tableTwo").src = tables[C1Table].Image;
					document.getElementById("tableTwoGreetingButtons").style.display="inline";
				}
				
				else if(C1Table==2)
				{
					flipCard(2, "back");
					document.getElementById("tableThree").src = tables[C1Table].Image;
					document.getElementById("tableThreeGreetingButtons").style.display="inline";
				}
				
				else if(C1Table==3)
				{
					flipCard(3, "back");
					document.getElementById("tableFour").src = tables[C1Table].Image;
					document.getElementById("tableFourGreetingButtons").style.display="inline";
				}
				
			}
			
			//-------
			//Table 2
			//-------
			else if(theCount==1)
			{
				customerCounter++;
				C2Variable = getRandomInt(0,customers.length-1);
				C2Table = getRandomInt(0,4);
			
				//Run it Again to Avoid Duplicate Tables
				if((C2Table == C1Table) || (C2Variable == C1Variable))
				{
					customerCounter--;
					populateCustomer(1);
					//populateCustomerTwo()
				}
				else
				{
				//Populate the Table (Content)
				tables[C2Table].Name=customers[C2Variable].Name;
				tables[C2Table].Image=customers[C2Variable].Image;
				tables[C2Table].Satisfaction=customers[C2Variable].Satisfaction;
				satisfactionStockValues[C2Table]=0;
				updateSatisfaction(C2Table);
				//Populate The Table Accordingly
					if(C2Table==0)
					{
						flipCard(0, "back");
						document.getElementById("tableOne").src = tables[C2Table].Image;
						document.getElementById("tableOneGreetingButtons").style.display="inline";
					}
				
					else if(C2Table==1)
					{
						flipCard(1, "back");
						document.getElementById("tableTwo").src = tables[C2Table].Image;
						document.getElementById("tableTwoGreetingButtons").style.display="inline";
					}
				
					else if(C2Table==2)
					{
						flipCard(2, "back");
						document.getElementById("tableThree").src = tables[C2Table].Image;
						document.getElementById("tableThreeGreetingButtons").style.display="inline";
					}
				
					else if(C2Table==3)
					{
						flipCard(3, "back");
						document.getElementById("tableFour").src = tables[C2Table].Image;
						document.getElementById("tableFourGreetingButtons").style.display="inline";
					}
				}
			}
			
			//-------
			//Table 3
			//-------
			else if(theCount==2)
			{
				customerCounter++;
				C3Variable = getRandomInt(0,customers.length-1);
				C3Table = getRandomInt(0,4);
				//Run it Again to Avoid Duplicate Tables
				if
					(
						(
							(C3Table == C1Table)
							||
							(C3Table == C2Table)
						)
						||
						(
							(C3Variable == C1Variable)
							||
							(C3Variable == C2Variable)
						)
					)
					{
					customerCounter--;
					populateCustomer(2);
					//populateCustomerThree()
					}
				else
				{
					//Populate the Table (Content)
					tables[C3Table].Name=customers[C3Variable].Name;
					tables[C3Table].Image=customers[C3Variable].Image;
					tables[C3Table].Satisfaction=customers[C3Variable].Satisfaction;
					satisfactionStockValues[C3Table]=0;
					updateSatisfaction(C3Table);
				
					//Populate The Table (Display)
					if(C3Table==0)
					{
					flipCard(0, "back");
					document.getElementById("tableOne").src = tables[C3Table].Image;
					document.getElementById("tableOneGreetingButtons").style.display="inline";
					}
					
					else if(C3Table==1)
					{
						flipCard(1, "back");
						document.getElementById("tableTwo").src = tables[C3Table].Image;
						document.getElementById("tableTwoGreetingButtons").style.display="inline";
					}
					
					else if(C3Table==2)
					{
						flipCard(2, "back");
						document.getElementById("tableThree").src = tables[C3Table].Image;
						document.getElementById("tableThreeGreetingButtons").style.display="inline";
					}
					
					else if(C3Table==3)
					{
						flipCard(3, "back");
						document.getElementById("tableFour").src = tables[C3Table].Image;
						document.getElementById("tableFourGreetingButtons").style.display="inline";
					}
				};
			}
			
			//-------
			//Table 4
			//-------
			else if(theCount==3)
			{
				customerCounter++;
				C4Variable = getRandomInt(0,customers.length-1);
				C4Table = getRandomInt(0,4);
			
				//Run it Again to Avoid Duplicate Tables
				if
					(
						(
							(C4Table == C1Table)
							||
							(C4Table == C2Table)
							||
							(C4Table == C3Table)
						)
						||
						(
							(C4Variable == C1Variable)
							||
							(C4Variable == C2Variable)
							||
							(C4Variable == C3Variable)
						)
					)
					{
						customerCounter--;
						populateCustomer(3);
						//populateCustomerFour()
					}
				else
				{
					//Populate the Table (Content)
					tables[C4Table].Name=customers[C4Variable].Name;
					tables[C4Table].Image=customers[C4Variable].Image;
					tables[C4Table].Satisfaction=customers[C4Variable].Satisfaction;
					satisfactionStockValues[C4Table]=0;
					updateSatisfaction(C4Table);
			
					//Populate The Table (Display)
					if(C4Table==0)
					{
						flipCard(0, "back");
						document.getElementById("tableOne").src = tables[C4Table].Image;
						document.getElementById("tableOneGreetingButtons").style.display="inline";
						document.getElementById("tableOne").style.transitionDuration="2s";
					}
				
					else if(C4Table==1)
					{
						flipCard(1, "back");
						document.getElementById("tableTwo").src = tables[C4Table].Image;
						document.getElementById("tableTwoGreetingButtons").style.display="inline";
					}
				
					else if(C4Table==2)
					{
						flipCard(2, "back");
						document.getElementById("tableThree").src = tables[C4Table].Image;
						document.getElementById("tableThreeGreetingButtons").style.display="inline";
					}
				
					else if(C4Table==3)
					{
						flipCard(3, "back");
						document.getElementById("tableFour").src = tables[C4Table].Image;
						document.getElementById("tableFourGreetingButtons").style.display="inline";
					}
				};
			}
		}
	
	//================
	//================
	//GREETING OPTIONS
	//================
	//================
		
		//-----------------
		//Acknowledge Order
		//-----------------
		function acknowledgeOrder(table)
		{
			var theTable = table;
			orderAcknowledgementLayoutArray[theTable].style.display="none";
			populateText(theTable,"[Awaiting Meal Delivery.]");
			setTimeout(animateAwaitingDelivery,2000,theTable);
			responseFlashColor(theTable, silverLakeBlue, "1s",platinum); 
			clearTextBubbles(theTable);
			setTimeout(triggerNextCustomer,300);
		}
		
		//---------------------
		//Trigger Next Customer
		//---------------------
		function triggerNextCustomer()
		{
			if(customerCounter<3)
			{
				setTimeout(populateCustomer,1500,customerCounter+1);
			}
			else if(customerCounter==3)
			{
				setTimeout(advanceTime,1500);
			}	
		}
		
		//---------------------
		//Move Satisfaction Bar
		//---------------------
		var satisfactionBarFlag = 0;
		function moveSatisfactionBar(table, movement, orientation, color)
		{
			var theTable = table;
			var theMovement = movement;
			var theOrientation = orientation;
			var theColor = color;
			//Determine Which Element Applies
			elemBar = satisfactionBarArray[theTable];
			if(theOrientation=="Positive")
			{
				var id = setInterval(frame, 20);
				function frame() 
				{
					if ((satisfactionStockValues[theTable] >= (tables[theTable].Satisfaction + theMovement)) || satisfactionStockValues[theTable]==100) 
					{
					clearInterval(id);
					tables[theTable].Satisfaction = satisfactionStockValues[theTable];
					elemBar.style.backgroundColor = oxfordBlue;
					elemBar.style.transitionDuration = "1s";
					elemBar.style.boxShadow = "0px 0px 0px";
					satisfactionBarFlag=0;
					} 
					else 
					{
					satisfactionBarFlag=1;
					satisfactionStockValues[theTable]++;
					elemBar.style.boxShadow = "12.5px 12.5px 12.5px #999";					
					elemBar.style.transitionDuration = "1s";
					//elemBar.style.backgroundColor = yinmnBlue;
					elemBar.style.backgroundColor = theColor;
					elemBar.innerHTML = satisfactionStockValues[theTable] * 1;
					}
				}
			}
			else if(theOrientation=="Negative")
			{
				var theMovement = movement;
				var id = setInterval(frame, 20);
				function frame() 
				{
					if (satisfactionStockValues[theTable] <= (tables[theTable].Satisfaction - theMovement))
					{
						clearInterval(id);
						tables[theTable].Satisfaction = satisfactionStockValues[theTable];
						elemBar.style.backgroundColor = oxfordBlue;
						elemBar.style.transitionDuration = "3s";
						elemBar.innerHTML = satisfactionStockValues[theTable] * 1
						satisfactionBarFlag=0;
					} 
					else if(satisfactionStockValues[theTable]<=0)
					{
						clearInterval(id);
						tables[theTable].Satisfaction = satisfactionStockValues[theTable];
						elemBar.style.backgroundColor =silverLakeBlue;
						elemBar.style.boxShadow = "0px";					
						elemBar.style.transitionDuration = "3s";
						elemBar.innerHTML = satisfactionStockValues[theTable] * 1
						satisfactionBarFlag=0;
					}
					else
					{
					  satisfactionBarFlag=1;
					  satisfactionStockValues[theTable]--; 
					  elemBar.style.transitionDuration = "1s";
					  elemBar.style.backgroundColor = theColor;
					  elemBar.innerHTML = satisfactionStockValues[theTable] * 1;
					}
				}
			}
		}
		
		//===============
		//TABLE GREETINGS
		//===============
		
					
				//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
				//Functions to Flash Color in Responses
				//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
				function responseFlashColor(table, color, duration, returnColor) 
					{
					  
					  //Create the Private Variables
					  var theTable = table;
					  var theColor = color;
					  var theDuration = duration;
					  var start = 0;
					  var end = 10;
					  
					  //Check the Table Number
					  if(theTable==0)
					  {
						  var elem = document.getElementById("tableOneReply");
					  }
					  else if(theTable==1)
					  {
						  var elem = document.getElementById("tableTwoReply");
					  }
					   else if(theTable==2)
					  {
						  var elem = document.getElementById("tableThreeReply");
					  }
					   else if(theTable==3)
					  {
						  var elem = document.getElementById("tableFourReply");
					  }
					  else if(theTable=="thePhaseHeading")
					  {
						  var elem = document.getElementById("thePhaseHeading");
					  }
					  
					  //Set the Interval
					  var id = setInterval(frame, 100);
					  
					  //Now Fire the Function
					  function frame() {
						if (start >= end) {
						  clearInterval(id);
						  start = 0;
						  elem.style.backgroundColor = returnColor;
						  elem.style.color = "black";
						  elem.style.borderRadius = "0px";
						  elem.style.boxShadow = "none";
						  elem.style.margin="1px";
						  elem.style.padding="1px";
						  elem.style.transitionDuration = theDuration;
						} else {
						  start++; 
						  elem.style.borderRadius = "60px";
						  elem.style.backgroundColor = theColor;
						  elem.style.color = platinum
						  elem.style.boxShadow = "5px 10px 15px grey";
						  //elem.style.margin = ".5%"
						 // elem.style.padding = ".5%"
						  elem.style.transitionDuration = theDuration;
						}
					  }
					}
					
				function populateText(locate, textInput, timeVar){
					disableButtons();
					var theTimeVar = timeVar;
					var theTextInput = textInput;
					var theLocation = locate;
					var timeVariable = theTimeVar/theTextInput.length
					 //Check the Location Parameter
					  if(theLocation==0)
					  {
						  var elem = document.getElementById("tableOneReply");
					  }
					  else if(theLocation==1)
					  {
						  var elem = document.getElementById("tableTwoReply");
					  }
					   else if(theLocation==2)
					  {
						  var elem = document.getElementById("tableThreeReply");
					  }
					   else if(theLocation==3)
					  {
						  var elem = document.getElementById("tableFourReply");
					  }
					  else if(theLocation=="thePhaseDescription")
					  {
						  var elem = document.getElementById("thePhaseDescription");
					  }
					  else if(theLocation=="chefComment")
					  {
						  var elem = document.getElementById("chefComment");
					  }
					theTextOutput += theTextInput[theTextOutput.length];
					elem.innerHTML = theTextOutput;
					if (theTextOutput.length < theTextInput.length)
					{
						setTimeout(populateText,timeVariable,theLocation,theTextInput,1000);
					}
					else if(theTextOutput.length == theTextInput.length)
					{
						theTextOutput = "";
						reenableButtons();
					}
				}
			
			//========================================================================
			//Function to Disable All Buttons While populateText() Function is Working
			//========================================================================
			function disableButtons(){
				
				//First Gather All of the Buttons
				var buttons = document.getElementsByTagName("button");
				
				//Now Disable All of the Buttons and Make Them Opaque
				for (var i = 0; i <buttons.length; i++){
					buttons[i].disabled = true;
					buttons[i].style.opacity = "0.5";
					buttons[i].style.cursor = "not-allowed";
				}
			}
			
			
			//======================================================================================
			//Function to Reenable All Buttons When The populateText() Function Has Finished Working
			//======================================================================================
			function reenableButtons(){
				
				
				//First Gather All of the Buttons
				var buttons = document.getElementsByTagName("button");
				
				//Reeactivate the Buttons
				for (var i = 0; i < buttons.length; i++){
					buttons[i].disabled = false;
					buttons[i].style.opacity = "1";
					buttons[i].style.cursor = "pointer";
				}
			}			
					
			//----------------------------------------------------------
			//Universal Function to Add Dots to 'Awaiting Meal Delivery'
			//----------------------------------------------------------
			function animateAwaitingDelivery(table) 
					{
					  
					  //Create the Private Variables
					  var theTable = table;
					  var start = 0;
					  var end = 3;
					  var awaitingDeliveryText =
					  [
					  "[Awaiting Meal Delivery.&nbsp&nbsp]",
					  "[Awaiting Meal Delivery.. ]",
					  "[Awaiting Meal Delivery...]"
					  ]
					  
					  //Check the Table Number
					  if(theTable==0)
					  {
						  var elem = document.getElementById("tableOneReply");
					  }
					  else if(theTable==1)
					  {
						  var elem = document.getElementById("tableTwoReply");
					  }
					   else if(theTable==2)
					  {
						  var elem = document.getElementById("tableThreeReply");
					  }
					   else if(theTable==3)
					  {
						  var elem = document.getElementById("tableFourReply");
					  }
					  
					  //Set the Interval
					  var id = setInterval(frame, 200);
					  
					  //Now Fire the Function
					  function frame() {
						
						//If Cycle Has Run and Player is Still in Greeting Phase...
						if (start >= end && phaseCounter==0) 
						{
							clearInterval(id);
							animateAwaitingDelivery(theTable)
						}
						
						//If Cycle Has Run and Player is Not in Greeting Phase...
						else if (start >= end && phaseCounter !== 0)
						{
							clearInterval(id);
						}
						
						//If Cycle Has Not Fully Run
						else if(start < end)
						{
							elem.innerHTML=awaitingDeliveryText[start];
							start++;
						}
					  }
					}
			
			//------------------------------------
			//Function for Greeting/Check By Name
			//------------------------------------
			
			function selectInputField(target, table)
			{
				theTarget = target;
				theTable = table;
				if(theTarget=="Greet")
				{
					greetByNameInputs[theTable].focus();
					greetByNameInputs[theTable].select();
				}
				else if(theTarget=="Check")
				{
					checkByNameInputs[theTable].focus();
					checkByNameInputs[theTable].select();
				}
			}
			
			//-------------------------------------------------------------------------
			//Universal Function for Preparing the Layout for Greeting Customer By Name
			//-------------------------------------------------------------------------
			function greetCustomerByNameLayout(table)
			{
				var theTable=table;
				greetingGeneralLayoutArray[theTable].style.display="none";
				greetingByNameLayoutArray[theTable].style.display="inline";
			}
			
			//--------------------------------------------------------------
			//Universal Function for SUBMITTING Greeting to Customer By Name
			//--------------------------------------------------------------
			function greetCustomerByName(table)
				{
					var theTable = table;
					var elem = greetByNameInputs[theTable];
					var greetByNameGreetings=
						[
						"Good morning,&nbsp<b>"+elem.value +"</b>.",
						"Hello,&nbsp<b>"+elem.value +"</b>.",
						"Welcome back,&nbsp<b>"+elem.value +"</b>."
						];
					var greetByNameSuccessResponses=
						[
						"Oh, hello again!",
						"Great to see you again.",
						"Oh - yes, hello to you.",
						"Wow, thanks for remembering me.",
						"Good morning!",
						"It's nice that you remembered my name."
						];
					var greetByNameFailResponses=
						[
						"Oh. No, my name is&nbsp<b>" + tables[theTable].Name + "</b>...",
						"Me? No, I'm&nbsp<b>" + tables[theTable].Name + "</b>...",
						"No, I'm&nbsp<b>" + tables[theTable].Name + "</b>..."
						]
					var selectionVariableGreetings=getRandomInt(0,greetByNameGreetings.length-1);
					var selectionVariableGreetingsSuccess=getRandomInt(0,greetByNameSuccessResponses.length-1);
					var selectionVariableGreetingsFail=getRandomInt(0,greetByNameFailResponses.length-1);
					if(theTable==0)
					{
						classSelector = 0;
						document.getElementById("tableOneGreetingButtons").style.display="none";
						document.getElementById("tableOneGreetByNameLayout").style.display="none";
						setTimeout(populateTextBubble,300,"tableOneRight1","rightTextBubble",classSelector,greetByNameGreetings[selectionVariableGreetings]);
						if(document.getElementById("tableOneGreetByNameInput").value.toUpperCase() == tables[0].Name.toUpperCase())
						{
						setTimeout(populateTextBubble,1000,"tableOneLeft1","leftTextBubble",classSelector,greetByNameSuccessResponses[selectionVariableGreetingsSuccess]);
						moveSatisfactionBar(0,20,"Positive",bonusGreen);
						}
						else
						{
						setTimeout(populateTextBubble,1000,"tableOneLeft1","leftTextBubble",classSelector,greetByNameFailResponses[selectionVariableGreetingsFail]);
						classSelector++;
						moveSatisfactionBar(0,30,"Negative",penaltyRed);
						//moveSatisfactionOne_Neg(30, "red");
						}
	
					//Clear the Name Input
					tableOneGreetByNameInput.value=null;
					//Now Proceed to take the customer's order
					setTimeout(tableOrder,2000,0);
					}
					
					else if(theTable==1)
					{
						classSelector = 2;
						document.getElementById("tableTwoGreetingButtons").style.display="none";
						document.getElementById("tableTwoGreetByNameLayout").style.display="none";
						setTimeout(populateTextBubble,300,"tableTwoRight1","rightTextBubble",classSelector,greetByNameGreetings[selectionVariableGreetings]);
						if(document.getElementById("tableTwoGreetByNameInput").value.toUpperCase() == tables[1].Name.toUpperCase())
						{
						setTimeout(populateTextBubble,1000,"tableTwoLeft1","leftTextBubble",classSelector,greetByNameSuccessResponses[selectionVariableGreetingsSuccess]);
						moveSatisfactionBar(1,20,"Positive",bonusGreen);
						}
						else
						{
						setTimeout(populateTextBubble,1000,"tableTwoLeft1","leftTextBubble",classSelector,greetByNameFailResponses[selectionVariableGreetingsFail]);
						classSelector++;
						moveSatisfactionBar(1,30,"Negative",penaltyRed);
						//moveSatisfactionOne_Neg(30, "red");
						}
					//Clear the Name Input
					tableTwoGreetByNameInput.value=null;
					//Now Proceed to take the customer's order
					setTimeout(tableOrder,2000,1);
					}
					
					else if(theTable==2)
					{
						classSelector = 4;
						document.getElementById("tableThreeGreetingButtons").style.display="none";
						document.getElementById("tableThreeGreetByNameLayout").style.display="none";
						setTimeout(populateTextBubble,300,"tableThreeRight1","rightTextBubble",classSelector,greetByNameGreetings[selectionVariableGreetings]);
						if(document.getElementById("tableThreeGreetByNameInput").value.toUpperCase() == tables[2].Name.toUpperCase())
						{
						setTimeout(populateTextBubble,1000,"tableThreeLeft1","leftTextBubble",classSelector,greetByNameSuccessResponses[selectionVariableGreetingsSuccess]);
						moveSatisfactionBar(2,20,"Positive",bonusGreen);
						}
						else
						{
						setTimeout(populateTextBubble,1000,"tableThreeLeft1","leftTextBubble",classSelector,greetByNameFailResponses[selectionVariableGreetingsFail]);
						classSelector++;
						moveSatisfactionBar(2,30,"Negative",penaltyRed);
						}
					
					//Clear the Name Input
					tableThreeGreetByNameInput.value=null;
					//Now Proceed to take the customer's order
					setTimeout(tableOrder,2000,2);
					}
					
					else if(theTable==3)
					{
						classSelector = 6;
						document.getElementById("tableFourGreetingButtons").style.display="none";
						document.getElementById("tableFourGreetByNameLayout").style.display="none";
						setTimeout(populateTextBubble,300,"tableFourRight1","rightTextBubble",classSelector,greetByNameGreetings[selectionVariableGreetings]);
						if(document.getElementById("tableFourGreetByNameInput").value.toUpperCase() == tables[3].Name.toUpperCase())
						{
						setTimeout(populateTextBubble,1000,"tableFourLeft1","leftTextBubble",classSelector,greetByNameSuccessResponses[selectionVariableGreetingsSuccess]);
						moveSatisfactionBar(3,20,"Positive",bonusGreen);
						}
						else
						{
						setTimeout(populateTextBubble,1000,"tableFourLeft1","leftTextBubble",classSelector,greetByNameFailResponses[selectionVariableGreetingsFail]);
						classSelector++;
						moveSatisfactionBar(3,30,"Negative",penaltyRed);
						}
						tableFourGreetByNameInput.value=null;
						//Now Proceed to take the customer's order
						setTimeout(tableOrder,2000,3);	
					}
				}
			
			//-------------------------------
			//Universal Ask For Customer Name
			//-------------------------------
			function askForCustomerName(table)
			{
				var theTable = table;
				var askForCustomerNameRequest=
				[
					"Good morning. What is your name?",
					"Hello! I don't think that we've met.",
					"Hi! What is your name?",
					"Good morning. I don't think that we've met."
				];
				var askForCustomerNameResponse=
				[
					"Hello. My name is&nbsp<b>" + tables[theTable].Name+"</b>.",
					"Hello. My name is&nbsp<b>" + tables[theTable].Name+"</b>.",
					"Hi. I'm&nbsp<b>" + tables[theTable].Name+"</b>.",
					"Hey! It's&nbsp<b>" + tables[theTable].Name+"</b>.",
					"Hi. I'm&nbsp<b>" + tables[theTable].Name+"</b>",
					"I'm&nbsp<b>" + tables[theTable].Name + "</b>.",
					"My name is&nbsp<b>" + tables[theTable].Name + "</b>.",
					"My name is&nbsp<b>" + tables[theTable].Name + "</b>."
				];
				var selectionVariableAskForName=getRandomInt(0,askForCustomerNameRequest.length-1);
				var selectionVariable=getRandomInt(0,askForCustomerNameResponse.length-1);
				if(theTable==0)
				{
					classSelector=0;
					document.getElementById("tableOneGreetingButtons").style.display="none";
					setTimeout(populateTextBubble,300,"tableOneRight1","rightTextBubble",classSelector,askForCustomerNameRequest[selectionVariableAskForName]);
					setTimeout(populateTextBubble,1000,"tableOneLeft1","leftTextBubble",classSelector,askForCustomerNameResponse[selectionVariable]);
				}
				else if(theTable==1)
				{
					classSelector=2;
					document.getElementById("tableTwoGreetingButtons").style.display="none";
					setTimeout(populateTextBubble,300,"tableTwoRight1","rightTextBubble",classSelector,askForCustomerNameRequest[selectionVariableAskForName]);
					setTimeout(populateTextBubble,1000,"tableTwoLeft1","leftTextBubble",classSelector,askForCustomerNameResponse[selectionVariable]);
				}
				else if(theTable==2)
				{
					classSelector=4;
					document.getElementById("tableThreeGreetingButtons").style.display="none";
					setTimeout(populateTextBubble,300,"tableThreeRight1","rightTextBubble",classSelector,askForCustomerNameRequest[selectionVariableAskForName]);
					setTimeout(populateTextBubble,1000,"tableThreeLeft1","leftTextBubble",classSelector,askForCustomerNameResponse[selectionVariable]);
				}
				else if(theTable==3)
				{
					classSelector=6;
					document.getElementById("tableFourGreetingButtons").style.display="none";
					setTimeout(populateTextBubble,300,"tableFourRight1","rightTextBubble",classSelector,askForCustomerNameRequest[selectionVariableAskForName]);
					setTimeout(populateTextBubble,1000,"tableFourLeft1","leftTextBubble",classSelector,askForCustomerNameResponse[selectionVariable]);
				}
				setTimeout(tableOrder,2000,theTable);
			}
			//-------------------
			//Modular Table Order
			//-------------------
			function tableOrder(table)
			{
				
				var orderPrompt=
				[
				"What can we bring you today?",
				"Can I take your order?",
				"What are you having today?",
				"Are you ready to order?",
				"What would you like to order?",
				"Have you reviewed the menu?"
				];
				
				var orderPrefixes=
				[
				"I would like ",
				"Please bring me ",
				"I will have ",
				"I will take ",
				"I'll order "
				];
				
				var theTable = table;
				var selectionVariable = getRandomInt(0,customerOrders.length);
				var orderPrefixVariable = getRandomInt(0,orderPrefixes.length-1);
				tables[theTable].Order = customerOrders[selectionVariable].Article + "&nbsp<b>" + customerOrders[selectionVariable].Name;
				var orderPromptVariable= getRandomInt(0,orderPrompt.length-1);
				
				//~~~~~~~~~
				//Table One
				//~~~~~~~~~
				if(theTable==0)
				{
					classSelector = 1;
					if
					(
						(tables[0].Order == tables[1].Order)
						||
						(tables[0].Order == tables[2].Order)
						||
						(tables[0].Order == tables[3].Order)
					)
					{
					tableOrder(0);
					}
					else
					{
					tables[0].OrderImage = customerOrders[selectionVariable].Image;
					setTimeout(populateTextBubble,300,"tableOneRight2","rightTextBubble",classSelector,orderPrompt[orderPromptVariable]);
					setTimeout(populateTextBubble,1000,"tableOneLeft2","leftTextBubble",classSelector,orderPrefixes[orderPrefixVariable] + " " + tables[theTable].Order + "</b>.");
					}
				}
				
				//~~~~~~~~~
				//Table Two
				//~~~~~~~~~
				else if(theTable==1)
				{
					classSelector=3;
					if
					(
						(tables[1].Order == tables[0].Order)
						||
						(tables[1].Order == tables[2].Order)
						||
						(tables[1].Order == tables[3].Order)
					)
					{
					tableOrder(1);
					}
					else
					{
					tables[1].OrderImage = customerOrders[selectionVariable].Image;
					setTimeout(populateTextBubble,300,"tableTwoRight2","rightTextBubble",classSelector,orderPrompt[orderPromptVariable]);
					setTimeout(populateTextBubble,1000,"tableTwoLeft2","leftTextBubble",classSelector,orderPrefixes[orderPrefixVariable] + " " + tables[theTable].Order + "</b>.");
					}
				}
				
				//~~~~~~~~~~~
				//Table Three
				//~~~~~~~~~~~
				else if(theTable==2)
				{
					classSelector=5;
					if
					(
						(tables[2].Order == tables[0].Order)
						||
						(tables[2].Order == tables[1].Order)
						||
						(tables[2].Order == tables[3].Order)
					)
					{
					tableOrder(2);
					}
					else
					{
					tables[2].OrderImage = customerOrders[selectionVariable].Image;
					setTimeout(populateTextBubble,300,"tableThreeRight2","rightTextBubble",classSelector,orderPrompt[orderPromptVariable]);
					setTimeout(populateTextBubble,1000,"tableThreeLeft2","leftTextBubble",classSelector,orderPrefixes[orderPrefixVariable] + " " + tables[theTable].Order + "</b>.");
					}
				}
				
				//~~~~~~~~~~
				//Table Four
				//~~~~~~~~~~
				else if(theTable==3)
				{
					classSelector=7;
					if
					(
						(tables[3].Order == tables[0].Order)
						||
						(tables[3].Order == tables[1].Order)
						||
						(tables[3].Order == tables[2].Order)
					)
					{
					tableOrder(3);
					}
					else
					{
					tables[3].OrderImage = customerOrders[selectionVariable].Image;
					setTimeout(populateTextBubble,300,"tableFourRight2","rightTextBubble",classSelector,orderPrompt[orderPromptVariable]);
					setTimeout(populateTextBubble,1000,"tableFourLeft2","leftTextBubble",classSelector,orderPrefixes[orderPrefixVariable] + " " + tables[theTable].Order + "</b>.");
					}
				}
					setTimeout(displayTableAcknowledgement,2000,theTable);
			}
			
			//-------------------------------------------------------
			//Function for Displaying Layout to Acknowledge the Order
			//-------------------------------------------------------
			function displayTableAcknowledgement(table)
			{
			var theTable = table;
			orderAcknowledgementLayoutArray[theTable].style.display="inline";
			}

//=======
//=======
//KITCHEN
//=======
//=======

//Variables
var incorrectFood = null;
var deliveryCounter = 0;
var foodDelivery = 
[
deliveryOne={
	Name:null,
	Image:null
},
deliveryTwo={
	Name:null,
	Image:null
},
deliveryThree={
	Name:null,
	Image:null
},
deliveryFour={
	Name:null,
	Image:null
}
]
function makeFood()
{
	updateKitchenBar(yinmnBlue, "Preparing Food","");
	//Food Delivery
	foodDelivery[0].Name=tables[0].Order;
	foodDelivery[0].Image=tables[0].OrderImage;
	foodDelivery[1].Name=tables[1].Order;
	foodDelivery[1].Image=tables[1].OrderImage;
	foodDelivery[2].Name=tables[2].Order;
	foodDelivery[2].Image=tables[2].OrderImage;
	foodDelivery[3].Name=tables[3].Order;
	foodDelivery[3].Image=tables[3].OrderImage;
	setTimeout(promptDelivery, 1000);
}	

function flashColor(color, target, duration)
{
	theTarget = target;
	theColor = color;
	var elem = document.getElementById(target);
	elem.style.backgroundColor = color;
	elem.style.transitionDuration = duration;
}


//=============
//=============
//DELIVERY PREP
//=============
//=============
function promptDelivery()
{
	//---------------------------
	//Shuffle the Customer Orders
	//---------------------------
	fisherYatesShuffleFoodDeliveries();
	
	//--------------------------------
	//Set the Delivery Counter to Zero
	//--------------------------------
	deliveryCounter = 0;
	
	//---------------------------------
	//Make the Kitchen Elements Visible
	//---------------------------------
	document.getElementById("theKitchenImage").style.display="inline";
	flipCard("theKitchen","front");
	
	//--------------------------
	//Display the First Delivery
	//--------------------------
	document.getElementById("theKitchenImage").src=foodDelivery[deliveryCounter].Image;
	
	//---------------------------
	//Blank Out Customer Messages
	//---------------------------
	blankOutCustomerReply(0);
	blankOutCustomerReply(1);
	blankOutCustomerReply(2);
	blankOutCustomerReply(3);
	
	//------------------------
	//Make the Tooltip Visible
	//------------------------
	makeToolTipVisible(4,"deliveryStage1");
}

	//-------------------------------------------
	//Administrative Function: Update Kitchen Bar
	//-------------------------------------------
	function updateKitchenBar(color, theStatus, card)
	{
		var theCard=card;
		document.getElementById("myBar5").innerHTML=theStatus;
		setTimeout(flashColor(color,"myBar5", "2s"),1000);
		document.getElementById("theKitchenImage").src=theCard;	
	}

//==========
//==========
//DELIVERIES
//==========
//==========

	//-----------------------
	//Drag/Drop Functionality
	//-----------------------
	
		//----------
		//Drag Start
		//----------
		function dragStart(event)
		{
			if(phaseCounter==1)
			{
			event.dataTransfer.setData("Text", event.target.id);
			clearToolTip(4);
			}
		}
	
		//----------
		//Drag Leave
		//----------
		function dragLeave(event)
		{
			if(phaseCounter==1)
			{
			event.target.style.border = "none";
			event.target.style.transitionDuration = "3s"
			event.target.style.boxShadow="1.5px 1.5px 1.5px #999";
			}
		}
		
		//----------
		//Allow Drop
		//----------
		function allowDrop(event){
			if(phaseCounter==1)
			{
			event.preventDefault();
			event.target.style.border = "2px solid black";
			event.target.style.boxShadow = "10px 10px 10px grey";
			event.target.style.transitionDuration = "0.75s"
			}
		}
	
		//----
		//Drop
		//----
		function drop(event, table)
		{
			var theTable = table;
			if(phaseCounter==1)
			{
			event.preventDefault();
			var data = event.dataTransfer.getData("Text");
			event.target.style.boxShadow = "1.5px 1.5px 1.5px #999";
			clearToolTip(4);
			deliverToTable(theTable);
			}
		}

	//---------------------------
	//Universal Delivery Function
	//---------------------------
	function deliverToTable(table)
	{
		
		//------------------
		//Standard Variables
		//------------------
		var theTable = table;
		var reply;
		
		//------------------------
		//Waiter Delivery Messages
		//------------------------
		var deliveryMessage =
		[
		"Here you go!",
		"Your meal has arrived.",
		"There you go!"
		];
		var deliveryMessageVariable = getRandomInt(0,deliveryMessage.length-1);
		
		//---------------------------
		//Negative Customer Responses
		//---------------------------
		var negativeDeliveryResponses=
		[
		"Oh, that's not mine.",
		"Sorry, that's not mine.",
		"I didn't order this.",
		"This must be someone else's.",
		"Oh, I didn't order that.",
		"Thanks, but that isn't mine."
		];
		var negativeDeliveryResponseVariable = getRandomInt(0,negativeDeliveryResponses.length-1);
		
		//---------------------------
		//Positive Customer Responses
		//---------------------------
		var deliveryResponses=
		[
		"This looks good!",
		"It's here!",
		"Thank you very much",
		"Thanks a lot!",
		"Thanks",
		"Thanks!",
		"Thank you",
		"This looks great.",
		"Much appreciated.",
		"Cool; thank you.",
		"Yum."
		];
		
		//---------------
		//Other Variables
		//---------------
		var selectionVariable=getRandomInt(0,deliveryResponses.length-1);
		var satisfactionBar;
		var elem1="";
		var elem2="";
		var elem3="";
		var elem4="";
		
		//---------------------------------
		//Set Variables to Applicable Table
		//---------------------------------
		if(theTable == 0)
		{
			classSelector = 0;
			document.getElementById("theTableOneChatBox").style.display="block";
			satisfactionBar=document.getElementById("tableOne");
			elem1="tableOneRight1";
			elem2="tableOneLeft1";
			elem3="tableOneRight2";
			elem4="tableOneLeft2";
		}
		else if(theTable == 1)
		{
			classSelector = 2;
			document.getElementById("theTableTwoChatBox").style.display="block";
			satisfactionBar=document.getElementById("tableTwo");
			elem1="tableTwoRight1";
			elem2="tableTwoLeft1";
			elem3="tableTwoRight2";
			elem4="tableTwoLeft2";
		}	
		else if(theTable == 2)
		{
			classSelector = 4;
			document.getElementById("theTableThreeChatBox").style.display="block";
			satisfactionBar=document.getElementById("tableThree");
			elem1="tableThreeRight1";
			elem2="tableThreeLeft1";
			elem3="tableThreeRight2";
			elem4="tableThreeLeft2";	
		}	
		else if(theTable == 3)
		{
			classSelector = 6;
			document.getElementById("theTableFourChatBox").style.display="block";
			satisfactionBar=document.getElementById("tableFour");
			elem1="tableFourRight1";
			elem2="tableFourLeft1";
			elem3="tableFourRight2";
			elem4="tableFourLeft2";
		}
		
		//-----------------------------
		//If Meal is Delivered Properly
		//-----------------------------
		if(tables[theTable].Order==foodDelivery[deliveryCounter].Name)
		{
			setTimeout(populateTextBubble,300,elem1,"rightTextBubble",classSelector,deliveryMessage[deliveryMessageVariable]);
			setTimeout(populateTextBubble,1000,elem2,"leftTextBubble",classSelector,deliveryResponses[selectionVariable]);
			setTimeout(clearTextBubbles,3000,theTable);
			satisfactionBar.style.border = "none";
			satisfactionBar.style.transitionDuration = "1s";
			moveSatisfactionBar(theTable,10,"Positive",bonusGreen);
			tables[theTable].Delivered=1;
			deliveryCounter++;
			clearToolTip(4);
			console.log("Delivery Counter: " + deliveryCounter);
			if(deliveryCounter==4)
			{
				clearToolTip(4);
				flipCard("theKitchen","back");
				document.getElementById("theKitchenImage").src="Images/Restaurant_Images/ClosedSign.png";
				deliveryCounter=0;
				setTimeout(customerChecksRound,3000);
			}
			else
			{
			document.getElementById("theKitchenImage").src=foodDelivery[deliveryCounter].Image;
			setTimeout(makeToolTipVisible,2500,4,"deliveryStage1");
			}
		}
		
		//----------------------------------
		//If Meal is Not Delivered Correctly
		//----------------------------------
		else if(tables[theTable].Order!==foodDelivery[deliveryCounter].Name)
		{
			setTimeout(populateTextBubble,300,elem1,"rightTextBubble",classSelector,deliveryMessage[deliveryMessageVariable]);
			setTimeout(populateTextBubble,1000,elem2,"leftTextBubble",classSelector,negativeDeliveryResponses[negativeDeliveryResponseVariable]);	
			setTimeout(clearTextBubbles,3000,theTable);
			satisfactionBar.style.border = "none";
			satisfactionBar.style.transitionDuration = "1s";
			moveSatisfactionBar(theTable,10,"Negative");
			setTimeout(makeToolTipVisible,2500,4,"deliveryStage1");
		}
	}
//=====================
//=====================
//CUSTOMER CHECKS ROUND
//=====================
//=====================

	//-------------------------------
	//Start the Customer Checks Round
	//-------------------------------
	function customerChecksRound()
	{
		clearToolTip(4);
		blankOutCustomerReply(1);
		blankOutCustomerReply(2);
		blankOutCustomerReply(3);
		blankOutCustomerReply(4);
		advanceTime();
		triggerNextCheck();
	}

	//---------------------------------
	//Function Trigger the *Next* Check
	//---------------------------------
	function triggerNextCheck()
	{
		if(customerCounter>-1)
		{
			setTimeout(populateCustomerCheck(),2000);
		}
		else if(customerCounter==-1)
		{
			flipCard("theKitchen","front");
			if(confirm("Day " + day + " is complete. \nClick 'OK' to continue playing. \nClick 'Cancel' to end the game."))
			{
				alert("Great! Press 'OK' and then press the `Open for Business` button in the bottom right corner to begin Day " + (day + 1));
				advanceTime();
			}
			else
			{
				alert("Thanks for playing!");
				advanceCheckMarks(2);
				makeToolTipVisible(4,"End");
			}
		}
	}
	
	//---------------------
	//CalculateTip Function
	//---------------------
	//This fires after the customer departs the restaurant. 3% of the Customer Satisfaction value.
	function calculateTip(customer)
	{
		var theCustomer = customer;
		var theMovement = Math.round(tables[theCustomer].Satisfaction * 0.03 * 100);
		var currentTips = Math.round(tips * 100)/100;
		var elem = document.getElementById("theTips");
		var elem2 = document.getElementById("item2B");
		var id = setInterval(frame, 100);
		tipIncrement = 10;
		function frame() 
		{
			if (tips >= (currentTips + theMovement)) {
			  console.log("End: Tips: " + tips + " Current Tips: " + currentTips + "The Movement: " + theMovement);
			  clearInterval(id);
			  currentTips = tips * 100;
			  elem.style.backgroundColor = yinmnBlue;
			  elem.style.color = platinum;
			  elem.style.transitionDuration = "2s";
			  elem2.style.backgroundColor = yinmnBlue;
			  elem2.style.transitionDuration = "2s";
			} else {  
			playTipJarSound("Start");
			  tips+=tipIncrement; 
			  console.log("Proceed: Tips: " + tips + " Current Tips: " + currentTips + "The Movement: " + theMovement);
			  elem.style.transitionDuration = "2s";
			  elem.style.backgroundColor = bonusGreen;
			  elem.style.color = platinum;
			  elem2.style.backgroundColor=bonusGreen;
			  elem2.style.transitionDuration = "2s"
			  elem.innerHTML = "Tip Jar: $" + (tips/100).toFixed(2);
			}
		}
	}


	//======================
	//======================
	//Modular Customer Check
	//======================
	//======================
	function populateCustomerCheck()
	{
		//~~~~~~~~~~~~~~
		//First Customer
		//~~~~~~~~~~~~~~
		if(customerCounter==3)
		{
			check1Table = getRandomInt(0,4);
			checkGeneralLayoutArray[check1Table].style.display="inline";
			customerCounter--;
		}
		
		//~~~~~~~~~~~~~~~
		//Second Customer
		//~~~~~~~~~~~~~~~
		else if(customerCounter==2)
		{
			check2Table = getRandomInt(0,4);
			if(check2Table == check1Table)
			{
				populateCustomerCheck();
			}
			else
			{
				checkGeneralLayoutArray[check2Table].style.display="inline";
				customerCounter--;
			}
		}
		
		else if(customerCounter==1)
		{
			check3Table = getRandomInt(0,4);
			//Run it Again to Avoid Duplicate Tables
			if
				(
					(check3Table == check1Table)
					||
					(check3Table == check2Table)
				)
				{
					populateCustomerCheck()
				}
		
			else
			{
				checkGeneralLayoutArray[check3Table].style.display="inline";
				customerCounter--;
			}
		}
		else if(customerCounter==0)
		{
			check4Table = getRandomInt(0,4);
		
			//Run it Again to Avoid Duplicate Tables
			if
				(
					(check4Table == check1Table)
					||
					(check4Table == check2Table)
					||
					(check4Table == check3Table)
				)
				{
					populateCustomerCheck()
				}
		
			else
			{
				checkGeneralLayoutArray[check4Table].style.display="inline";
				customerCounter--;
			}
		}
	}
	
	//====================================================
	//Modular Function for Displaying Check By Name Layout
	//====================================================
	function displayCheckByNameLayout(table)
	{
		var theTable = table;
		checkGeneralLayoutArray[theTable].style.display="none";
		checkByNameLayoutArray[theTable].style.display="inline";
	}

	//===============================================
	//Modular Function for *Submitting* Check By Name
	//===============================================
	function submitCheckByName(table)
	{
		var theTable = table;
		var elem = checkByNameInputs[theTable];
		var deliverCheckMessage=
			[
			"Thanks,&nbsp<b>"+elem.value +"</b>.",
			"We appreciate your business,&nbsp<b>"+elem.value +"</b>.",
			"See you soon,&nbsp<b>"+elem.value +"</b>."
			];
			
		var checkByNameResponses=
			[
			"Thanks.",
			"I appreciate it.",
			"Much appreciated.",
			"Great.",
			"Thanks again."
			];
					
		var unsuccessfulCheckByNameResponses=
			[
			"It's&nbsp<b>" + tables[theTable].Name + "</b>.",
			"My name is&nbsp <b>" + tables[theTable].Name + "</b>...",
			"Oh, I'm&nbsp<b>" + tables[theTable].Name + "</b>.",
			"Oh me? No, I'm&nbsp<b>" + tables[theTable].Name + "</b>.",
			"Sorry; it's&nbsp<b>" + tables[theTable].Name + ".</b>"
			];
			
		var checkDeliverMessageVariable=getRandomInt(0,deliverCheckMessage.length-1);	
		var selectionVariable=getRandomInt(0,checkByNameResponses.length-1);
		var otherSelectionVariable=getRandomInt(0,unsuccessfulCheckByNameResponses.length-1);
		var reply = checkByNameResponses[selectionVariable];
		var unsuccessfulReply = unsuccessfulCheckByNameResponses[selectionVariable];
		//Start Here
		classSelector = classSelectors[theTable];
		checkByNameLayoutArray[theTable].style.display="none";
		setTimeout(populateTextBubble,300,textBubbleArray[theTable][0],"rightTextBubble",classSelector,deliverCheckMessage[checkDeliverMessageVariable]);
		if(elem.value == tables[theTable].Name)
		{
			setTimeout(populateTextBubble,1000,textBubbleArray[theTable][1],"leftTextBubble",classSelector,checkByNameResponses[selectionVariable]);
			moveSatisfactionBar(theTable,30,"Positive",bonusGreen);
		}
		else
		{
			setTimeout(populateTextBubble,1000,textBubbleArray[theTable][1],"leftTextBubble",classSelector,unsuccessfulCheckByNameResponses[otherSelectionVariable]);
			moveSatisfactionBar(theTable,30,"Negative",penaltyRed);
		}
		//Clear the Value
		elem.value=null;
		
		//Customer Departs
		setTimeout(tableDeparture,3000,theTable);
		setTimeout(clearToolTip,3500,theTable);
	}
	
	//============================================
	//Modular Function - Submit Check; Forgot Name
	//============================================
	function submitCheckForgotName(table)
	{
		var theTable = table;
		var forgotNameCheckComments=
		[
		"Thank you...",
		"I seem to have forgotten your name.",
		"Sorry, I've forgotten your name.",
		"Here you go..."
		];
		var commentVariable=getRandomInt(0,forgotNameCheckComments.length-1);
		var forgotNameResponses=
		[
		"It's&nbsp<b>" + tables[theTable].Name + "</b>...",
		"It's&nbsp<b>" + tables[theTable].Name + "</b>...",
		"My name is&nbsp<b>" + tables[theTable].Name + "</b>...",
		"I'm&nbsp<b>" + tables[theTable].Name + "</b>...",
		"Oh, no I'm&nbsp<b>" + tables[theTable].Name + "</b>..."
		];
		var selectionVariable=getRandomInt(0,forgotNameResponses.length-1);
		var reply=forgotNameResponses[selectionVariable];
		classSelector = classSelectors[theTable];
		checkGeneralLayoutArray[theTable].style.display="none";
		setTimeout(populateTextBubble,300,textBubbleArray[theTable][0],"rightTextBubble",classSelector,forgotNameCheckComments[commentVariable]);
		setTimeout(populateTextBubble,1000,textBubbleArray[theTable][1],"leftTextBubble",classSelector,forgotNameResponses[selectionVariable]);
		moveSatisfactionBar(theTable,20,"Negative",penaltyRed);
		
		//Customer Departs
		setTimeout(tableDeparture,2000,theTable);
		setTimeout(clearToolTip,2500,theTable);
	}
	
	//==========================
	//Modular Departure Function
	//==========================
	function tableDeparture(table)
	{
		console.log(customerCounter);
		//--------------------
		//First Pick the Table
		//--------------------
		var theTable = table;
		classSelector=classSelectors[theTable]+1;
		var elem=textBubbleArray[theTable][2];
		var elem2=textBubbleArray[theTable][3];
		//Now Display the Tip Amount
		setTimeout(populateTextBubble,300,elem,"rightTextBubble",classSelector,"Have a nice day!");
		setTimeout(populateTextBubble,1000,elem2,"leftTextBubble",classSelector,"[Tip= " + tables[theTable].Satisfaction + " * $0.30 = $" + (((tables[theTable].Satisfaction * 0.03)*100)/100).toFixed(2) + "]");
		setTimeout(clearTextBubbles,3000,theTable);
		
		//--------------------------------
		//Now Calculate the Tip and Depart
		//--------------------------------
		setTimeout(calculateTip,3000,theTable);
		customers[theTable].Satisfaction=tables[theTable].Satisfaction;
		setTimeout(flipCard,3000,theTable,"front");
		setTimeout(blankOutCustomerImage,3200,theTable);
		setTimeout(blankOutTableValue,3500,theTable);
		
		//--------------------------------
		//Now Proceed to the Next Customer
		//--------------------------------
		setTimeout(triggerNextCheck,8100);
	}
	
//============
//EXPERIMENTAL
//============
//-------------------
//Create the Function
//-------------------
function populateTextBubble(locationa, locationClass, locationClassCount, content)
{
	var theLocation = locationa;
	var theLocationClass = locationClass;
	var theContent = content;
	var theLocationClassCount = locationClassCount;
	var elem = document.getElementById(theLocation);
	var elem2 = document.getElementsByClassName(theLocationClass);	
	elem2[theLocationClassCount].style.display = "flex";
	elem2[theLocationClassCount].style.height = "5vh";
	elem2[theLocationClassCount].style.width = "110%";
	if(theLocationClass=="rightTextBubble")
	{
		playRightSound();
	}
	else if(theLocationClass=="leftTextBubble")
	{
		playLeftSound();
	}
	setTimeout(reduceTextBubble,400,theLocation, theLocationClass, theLocationClassCount, theContent);
}
		
function reduceTextBubble(locationa, locationClass, locationClassCount, content)
{
	var theLocation = locationa;
	var theLocationClass = locationClass;
	var theContent = content;
	var theLocationClassCount = locationClassCount;
	var elem = document.getElementById(theLocation);
	var elem2 = document.getElementsByClassName(theLocationClass);
	if(theLocation.startsWith("kitchen"))
	{
	elem2[theLocationClassCount].style.textAlign = "0.5px";
	elem2[theLocationClassCount].style.width = "120%";
	//elem2[theLocationClassCount].style.height = 25vh;
	}
	else
	{
	elem2[theLocationClassCount].style.width = "100%";
	}
	elem.innerHTML=theContent;
}

function clearTextBubbles(table)
{
	var theTable=table;
	if(theTable==0||theTable==1||theTable==2||theTable==3)
	{
	elem1 = textBubbleArray[theTable][0].innerHTML="";
	elem2 = textBubbleArray[theTable][1].innerHTML="";
	elem3 = textBubbleArray[theTable][2].innerHTML="";
	elem4 = textBubbleArray[theTable][3].innerHTML="";
	document.getElementsByClassName("rightTextBubble")[classSelectors[theTable]].innerHTML=elem1;
	document.getElementsByClassName("leftTextBubble")[classSelectors[theTable]].innerHTML=elem2;
	document.getElementsByClassName("rightTextBubble")[classSelectors[theTable]+1].innerHTML=elem3;
	document.getElementsByClassName("leftTextBubble")[classSelectors[theTable]+1].innerHTML=elem4;
	document.getElementsByClassName("rightTextBubble")[classSelectors[theTable]].style.display = "none";
	document.getElementsByClassName("leftTextBubble")[classSelectors[theTable]].style.display = "none";
	document.getElementsByClassName("rightTextBubble")[classSelectors[theTable]+1].style.display = "none";
	document.getElementsByClassName("leftTextBubble")[classSelectors[theTable]+1].style.display = "none";
	}
	else if(theTable=="theKitchen")
	{
		elem1 = document.getElementsByClassName("rightTextBubble")[8].style.display = "none";
		elem2 = document.getElementsByClassName("rightTextBubble")[9].style.display = "none";
		elem3 = document.getElementsByClassName("rightTextBubble")[10].style.display = "none";
		elem4 = document.getElementsByClassName("rightTextBubble")[11].style.display = "none";
		document.getElementById("kitchenRight1").innerHTML="";
		document.getElementById("kitchenRight2").innerHTML="";
		document.getElementById("kitchenRight3").innerHTML="";
		document.getElementById("kitchenRight4").innerHTML="";
	}
}


//==================
//TOOL TIP FUNCTIONS
//==================

	//-------------------
	//Tool Tip Text Array
	//-------------------
	var toolTipTextArray=
	[
		document.getElementById("tableOneToolTipText"),
		document.getElementById("tableTwoToolTipText"),
		document.getElementById("tableThreeToolTipText"),
		document.getElementById("tableFourToolTipText"),
		document.getElementById("kitchenToolTipText")
	]

	//--------------------
	//Make Tooltip Visible
	//--------------------
	function makeToolTipVisible(table,buttonType)
	{
		//Ensure that the Satisfaction Bar Flag is Set to 0, otherwise this tooltip can disrupt the calculation.
		if(satisfactionBarFlag==0)
		{
			var theTable=table;
			var theButtonType=buttonType;
			elem = toolTipTextArray[theTable];
			elem.style.visibility="visible";
			elem.style.opacity=1;
			elem.style.transitionDuration="0.3s";
			if(theButtonType=="Greeting")
			{
				elem.innerHTML="<u><b>Greet By Name</b></u><br>Success: +20 Satisfaction<br>&nbspFailure: -30 Satisfaction";
			}
			else if(theButtonType=="AskForName")
			{
				elem.innerHTML="<u><b>Ask For Name</b></u><br>No Benefit; No Penalty";
			}
			else if(theButtonType=="CheckByName")
			{
				elem.innerHTML="<u><b>Remembered Name</b></u><br>Success: +30 Satisfaction<br>&nbspFailure: -30 Satisfaction";
			}
			else if(theButtonType=="CheckWithoutName")
			{
				elem.innerHTML="<u><b>Forgot Name</b></u><br> -20 Satisfaction";
			}
			else if(theButtonType=="deliveryStage1")
			{
				elem.innerHTML="<u><b>Pick Up Food Item</b></u><br>Move your cursor over the food item and hold the <b>left mouse button</b>.";
			}
			else if(theButtonType=="deliveryStage2")
			{
				elem.innerHTML="<u><b>Deliver Food</b></u><br>Now drag the food item to the customer who ordered the item.";
			}
			else if(theButtonType=="Satisfaction")
			{
				if(tables[theTable].Satisfaction>0)
				{
				elem.innerHTML="<u><b>Customer Satisfaction</b></u><br>" + tables[theTable].Satisfaction + "/100";
				}
				else if(tables[theTable].Satisfaction==null || tables[theTable].Satisfaction==0)
				{
				elem.innerHTML="<u><b>Customer Satisfaction</b></u><br>(Empty Table)";
				}
			}
			else if(theButtonType=="End")
			{
				elem.innerHTML="Thanks for playing!";
			}
		}
		//Just do nothing if the Satisfaction Bar Flag is Set to 1
		else if(satisfactionBarFlag==1)
		{
		}
	}
	
	//----------------------
	//Clear Tooltip Function
	//----------------------
	function clearToolTip(table)
	{
	var theTable=table;
	elem = toolTipTextArray[theTable];
	elem.style.visibility="hidden";
	elem.style.opacity=0;
	}
	
	//--------------------
	//Clear Kitchen Button
	//--------------------
	function clearButton()
	{
		if("open")
		{
			document.getElementById("openButton").style.display="none";
		}
	}
	
	
//===========
//X.) ONSTART
//===========
blankOutCustomerImage(0);
blankOutCustomerImage(1);
blankOutCustomerImage(2);
blankOutCustomerImage(3);
//advanceTime();	
			