/*
 * Globalize Culture sah
 *
 * http://github.com/jquery/globalize
 *
 * Copyright Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * This file was generated by the Globalize Culture Generator
 * Translation: bugs found in this file need to be fixed in the generator
 */

(function( window, undefined ) {

var Globalize;

if ( typeof require !== "undefined" &&
	typeof exports !== "undefined" &&
	typeof module !== "undefined" ) {
	// Assume CommonJS
	Globalize = require( "globalize" );
} else {
	// Global variable
	Globalize = window.Globalize;
}

Globalize.addCultureInfo( "sah", "default", {
	name: "sah",
	englishName: "Yakut",
	nativeName: "саха",
	language: "sah",
	numberFormat: {
		",": " ",
		".": ",",
		"NaN": "NAN",
		negativeInfinity: "-бесконечность",
		positiveInfinity: "бесконечность",
		percent: {
			pattern: ["-n%","n%"],
			",": " ",
			".": ","
		},
		currency: {
			pattern: ["-n$","n$"],
			",": " ",
			".": ",",
			symbol: "с."
		}
	},
	calendars: {
		standard: {
			"/": ".",
			firstDay: 1,
			days: {
				names: ["баскыһыанньа","бэнидиэнньик","оптуорунньук","сэрэдэ","чэппиэр","бээтинсэ","субуота"],
				namesAbbr: ["Бс","Бн","Оп","Ср","Чп","Бт","Сб"],
				namesShort: ["Бс","Бн","Оп","Ср","Чп","Бт","Сб"]
			},
			months: {
				names: ["Тохсунньу","Олунньу","Кулун тутар","Муус устар","Ыам ыйа","Бэс ыйа","От ыйа","Атырдьах ыйа","Балаҕан ыйа","Алтынньы","Сэтинньи","Ахсынньы",""],
				namesAbbr: ["тхс","олн","кул","мст","ыам","бэс","отй","атр","блҕ","алт","стн","ахс",""]
			},
			monthsGenitive: {
				names: ["тохсунньу","олунньу","кулун тутар","муус устар","ыам ыйын","бэс ыйын","от ыйын","атырдьах ыйын","балаҕан ыйын","алтынньы","сэтинньи","ахсынньы",""],
				namesAbbr: ["тхс","олн","кул","мст","ыам","бэс","отй","атр","блҕ","алт","стн","ахс",""]
			},
			AM: null,
			PM: null,
			patterns: {
				d: "MM.dd.yyyy",
				D: "MMMM d yyyy 'с.'",
				t: "H:mm",
				T: "H:mm:ss",
				f: "MMMM d yyyy 'с.' H:mm",
				F: "MMMM d yyyy 'с.' H:mm:ss",
				Y: "MMMM yyyy 'с.'"
			}
		}
	}
});

}( this ));
