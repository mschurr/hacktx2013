// "C"AL"C"ULATIONS
//
// bpm = 60 * beats/(tb - ta)


//Twinkle Twinkle Little Star
//
// ta = 3.37 se"c", tb = 9.70 se"c", 10 beats

<<<<<<< HEAD
//Kill Bill
//
// Tempo1 = 3.87
// ta = 1.93 sec, tb = 6.05, 16 beats 


=======
// Frequen"c"ies
>>>>>>> 8a57d19c50812adfcd1947bfc5d5a389343d063d

var Notes = {

};


<<<<<<< HEAD
var Songs = [
	{
				startTime : 0.56,
                bpm :  94.79
                title : "Twinkle Twinkle Little Star",
                notes : [[C,1,0],[C,1,0],[G,1,0],[G,1,0],[A,1,0],[A,1,0],[G,2,0],[F,1,0],[F,1,0],[E,1,0],[E,1,0],[D,1,0],[D,1,0],[C,2,0],
						 [G,1,0],[G,1,0],[F,1,0],[F,1,0],[E,1,0],[E,1,0],[D,2,0],[G,1,0],[G,1,0],[F,1,0],[F,1,0],[E,1,0],[E,1,0],[D,2,0],
						 [C,1,0],[C,1,0],[G,1,0],[G,1,0],[A,1,0],[A,1,0],[G,2,0],[F,1,0],[F,1,0],[E,1,0],[E,1,0],[D,1,0],[D,1,0],[C,2,0]]
	}
	{
				startTime : 1.93,
                bpm :  233.01 //this is double-time, eighth notes per minutes
                title : "Kill Bill",
                notes : [
						 //1
						 [C,2,0],[Bb,2,0],[C,1,0],[C,1,0],[Bb,2,0],[Bb,2,0],[Ab,2,0],[Bb,1,0],[Bb,1,0],[Ab,2,0],
						 [C,1,0],[C,1,0],[Bb,1,0],[Bb,1,0],[C,1,0],[C,1,0],[C,1,0],[Bb,2,0],[Bb,1,0],[Bb,1,0],[Ab,1,0],[Ab,1,0],[Bb,1,0],[Bb,1,0],[Ab,2,0],
						 [G,1,0],[F,1,0],[G,1,0],[Ab,1,0],[G,1,0],[F,1,0],[G,1,0],[Ab,1,0],[G,1,0],[F,1,0],[G,1,0],[Ab,1,0],[Bb,2,0],
						 [Ab,1,0],[Bb,1,0],[C,1,0],[Bb,1,0],[Ab,1,0],[Bb,1,0],[C,1,0],[Bb,1,0],[Ab,1,0],[Bb,1,0],[C,1,0],[Bb,1,0],[Ab,1,0],[Bb,4,0],
						 [Ab,1,0],
						 [C,2,0],[Bb,2,0],[C,1,0],[C,1,0],[Bb,2,0],[Bb,2,0],[Ab,2,0],[Bb,1,0],[Bb,1,0],[Ab,2,0],
						 [C,1,0],[C,1,0],[Bb,1,0],[Bb,1,0],[C,1,0],[C,1,0],[C,1,0],[Bb,2,0],[Bb,1,0],[Bb,1,0],[Ab,1,0],[Ab,1,0],[Bb,1,0],[Bb,1,0],[Ab,2,0],
						 [F,2,1],[Eb,2,1],[F,1,1],[F,1,1],[Eb,2,1],F,2,1],[Eb,2,1],[F,1,1],[F,1,1],[Eb,2,1],
						 [F,4,1],[Eb,4,1],[F,4,1],[Eb,4,1],
						 [F,8,1],
						 //2
						 [C,2,0],[Bb,2,0],[C,1,0],[C,1,0],[Bb,2,0],[Bb,2,0],[Ab,2,0],[Bb,1,0],[Bb,1,0],[Ab,2,0],
						 [C,1,0],[C,1,0],[Bb,1,0],[Bb,1,0],[C,1,0],[C,1,0],[C,1,0],[Bb,2,0],[Bb,1,0],[Bb,1,0],[Ab,1,0],[Ab,1,0],[Bb,1,0],[Bb,1,0],[Ab,2,0],
						 [G,1,0],[F,1,0],[G,1,0],[Ab,1,0],[G,1,0],[F,1,0],[G,1,0],[Ab,1,0],[G,1,0],[F,1,0],[G,1,0],[Ab,1,0],[Bb,2,0],
						 [Ab,1,0],[Bb,1,0],[C,1,0],[Bb,1,0],[Ab,1,0],[Bb,1,0],[C,1,0],[Bb,1,0],[Ab,1,0],[Bb,1,0],[C,1,0],[Bb,1,0],[Ab,1,0],[Bb,4,0],
						 [Ab,1,0],
						 [C,2,0],[Bb,2,0],[C,1,0],[C,1,0],[Bb,2,0],[Bb,2,0],[Ab,2,0],[Bb,1,0],[Bb,1,0],[Ab,2,0],
						 [C,1,0],[C,1,0],[Bb,1,0],[Bb,1,0],[C,1,0],[C,1,0],[C,1,0],[Bb,2,0],[Bb,1,0],[Bb,1,0],[Ab,1,0],[Ab,1,0],[Bb,1,0],[Bb,1,0],[Ab,2,0],
						 [F,2,1],[Eb,2,1],[F,1,1],[F,1,1],[Eb,2,1],F,2,1],[Eb,2,1],[F,1,1],[F,1,1],[Eb,2,1],
						 [F,4,1],[Eb,4,1],[F,4,1],[Eb,4,1],
						 [F,8,1],
						 //3
						 [C,2,0],[Bb,2,0],[C,1,0],[C,1,0],[Bb,2,0],[Bb,2,0],[Ab,2,0],[Bb,1,0],[Bb,1,0],[Ab,2,0],
						 [C,1,0],[C,1,0],[Bb,1,0],[Bb,1,0],[C,1,0],[C,1,0],[C,1,0],[Bb,2,0],[Bb,1,0],[Bb,1,0],[Ab,1,0],[Ab,1,0],[Bb,1,0],[Bb,1,0],[Ab,2,0],
						 [G,1,0],[F,1,0],[G,1,0],[Ab,1,0],[G,1,0],[F,1,0],[G,1,0],[Ab,1,0],[G,1,0],[F,1,0],[G,1,0],[Ab,1,0],[Bb,2,0],
						 [Ab,1,0],[Bb,1,0],[C,1,0],[Bb,1,0],[Ab,1,0],[Bb,1,0],[C,1,0],[Bb,1,0],[Ab,1,0],[Bb,1,0],[C,1,0],[Bb,1,0],[Ab,1,0],[Bb,4,0],
						 [Ab,1,0],
						 [C,2,0],[Bb,2,0],[C,1,0],[C,1,0],[Bb,2,0],[Bb,2,0],[Ab,2,0],[Bb,1,0],[Bb,1,0],[Ab,2,0],
						 [C,1,0],[C,1,0],[Bb,1,0],[Bb,1,0],[C,1,0],[C,1,0],[C,1,0],[Bb,2,0],[Bb,1,0],[Bb,1,0],[Ab,1,0],[Ab,1,0],[Bb,1,0],[Bb,1,0],[Ab,2,0],
						 [F,2,1],[Eb,2,1],[F,1,1],[F,1,1],[Eb,2,1],F,2,1],[Eb,2,1],[F,1,1],[F,1,1],[Eb,2,1],
						 [F,4,1],[Eb,4,1],[F,4,1],[Eb,4,1],
						 [F,8,1],
						 //4
						 [C,2,0],[Bb,2,0],[C,1,0],[C,1,0],[Bb,2,0],[Bb,2,0],[Ab,2,0],[Bb,1,0],[Bb,1,0],[Ab,2,0],
						 [C,1,0],[C,1,0],[Bb,1,0],[Bb,1,0],[C,1,0],[C,1,0],[C,1,0],[Bb,2,0],[Bb,1,0],[Bb,1,0],[Ab,1,0],[Ab,1,0],[Bb,1,0],[Bb,1,0],[Ab,2,0],
						 [G,1,0],[F,1,0],[G,1,0],[Ab,1,0],[G,1,0],[F,1,0],[G,1,0],[Ab,1,0],[G,1,0],[F,1,0],[G,1,0],[Ab,1,0],[Bb,2,0],
						 [Ab,1,0],[Bb,1,0],[C,1,0],[Bb,1,0],[Ab,1,0],[Bb,1,0],[C,1,0],[Bb,1,0],[Ab,1,0],[Bb,1,0],[C,1,0],[Bb,1,0],[Ab,1,0],[Bb,4,0],
						 [Ab,1,0],
						 [C,2,0],[Bb,2,0],[C,1,0],[C,1,0],[Bb,2,0],[Bb,2,0],[Ab,2,0],[Bb,1,0],[Bb,1,0],[Ab,2,0],
						 [C,1,0],[C,1,0],[Bb,1,0],[Bb,1,0],[C,1,0],[C,1,0],[C,1,0],[Bb,2,0],[Bb,1,0],[Bb,1,0],[Ab,1,0],[Ab,1,0],[Bb,1,0],[Bb,1,0],[Ab,2,0],
						 [F,2,1],[Eb,2,1],[F,1,1],[F,1,1],[Eb,2,1],F,2,1],[Eb,2,1],[F,1,1],[F,1,1],[Eb,2,1],
						 [F,4,1],[Eb,4,1],[F,4,1],[Eb,4,1],
						 [F,8,1],
						 //5
						 [C,2,0],[Bb,2,0],[C,1,0],[C,1,0],[Bb,2,0],[Bb,2,0],[Ab,2,0],[Bb,1,0],[Bb,1,0],[Ab,2,0],
						 [C,1,0],[C,1,0],[Bb,1,0],[Bb,1,0],[C,1,0],[C,1,0],[C,1,0],[Bb,2,0],[Bb,1,0],[Bb,1,0],[Ab,1,0],[Ab,1,0],[Bb,1,0],[Bb,1,0],[Ab,2,0],
						 [G,1,0],[F,1,0],[G,1,0],[Ab,1,0],[G,1,0],[F,1,0],[G,1,0],[Ab,1,0],[G,1,0],[F,1,0],[G,1,0],[Ab,1,0],[Bb,2,0],
						 [Ab,1,0],[Bb,1,0],[C,1,0],[Bb,1,0],[Ab,1,0],[Bb,1,0],[C,1,0],[Bb,1,0],[Ab,1,0],[Bb,1,0],[C,1,0],[Bb,1,0],[Ab,1,0],[Bb,4,0],
						 [Ab,1,0],
						 [C,2,0],[Bb,2,0],[C,1,0],[C,1,0],[Bb,2,0],[Bb,2,0],[Ab,2,0],[Bb,1,0],[Bb,1,0],[Ab,2,0],
						 [C,1,0],[C,1,0],[Bb,1,0],[Bb,1,0],[C,1,0],[C,1,0],[C,1,0],[Bb,2,0],[Bb,1,0],[Bb,1,0],[Ab,1,0],[Ab,1,0],[Bb,1,0],[Bb,1,0],[Ab,2,0],
						 [F,2,1],[Eb,2,1],[F,1,1],[F,1,1],[Eb,2,1],F,2,1],[Eb,2,1],[F,1,1],[F,1,1],[Eb,2,1],
						 [F,4,1],[Eb,4,1],[F,4,1],[Eb,4,1],
						 [F,8,1]]
	}	
	}	
];






=======
var song = {
				"startTime" : 0.56,
                "bpm" :  94.79, 
                "title" : "Twinkle Twinkle Little Star",
                "notes" : [["C",1],["C",1],["G",1],["G",1],["A",1],["A",1],["G",2],["F",1],["F",1],["E",1],["E",1],["D",1],["D",1],["C",2],
						 ["G",1],["G",1],["F",1],["F",1],["E",1],["E",1],["D",2],["G",1],["G",1],["F",1],["F",1],["E",1],["E",1],["D",2],
						 ["C",1],["C",1],["G",1],["G",1],["A",1],["A",1],["G",2],["F",1],["F",1],["E",1],["E",1],["D",1],["D",1],["C",2]]
};
>>>>>>> 8a57d19c50812adfcd1947bfc5d5a389343d063d
