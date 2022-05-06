var Months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function DateCalc ()
{
	let Today = new Date();
	let InputDate = new Date(document.getElementById('Input-Date').value);
	let BirthMonth, BirthDate, BirthYear;

	let BirthDetails = {
		Date:InputDate.getDate (),
		Month:InputDate.getMonth () + 1,
		Year:InputDate.getFullYear ()
	}

	let CurrentYear = Today.getFullYear ();
	let CurrentMonth = Today.getMonth () + 1;
	let CurrentDate = Today.getDate ();

	LeapChecker (CurrentYear);

	if (

		BirthDetails.Year > CurrentYear ||
		(BirthDetails.Month > CurrentMonth && BirthDetails.Year == CurrentYear) ||
		(BirthDetails.Date > CurrentDate && BirthDetails.Month == CurrentMonth && BirthDetails.Year == CurrentYear)

	)

	{
		var ErrorMessage = 'Not Born Yet'
		console.log (ErrorMessage);
		DisplayResult ("-", "-", "-");
		return;
	}

	BirthYear = CurrentYear - BirthDetails.Year;

	if (CurrentMonth >= BirthDetails.Month)
	{
		BirthMonth = CurrentMonth - BirthDetails.Month;
	}
	else
	{
		BirthYear --;
		BirthMonth = 12 + CurrentMonth - BirthDetails.Month;
	}

	if (CurrentDate > BirthDetails.Date)
	{
		BirthDate = CurrentDate - BirthDetails.Date
	}
	else
	{
		BirthMonth --;
		let Days = Months [CurrentMonth - 2];
		BirthDate = Days + CurrentDate - BirthDetails.Date;

		if (BirthMonth < 0)
		{
			BirthMonth = 11;
			BirthYear --;
		}
	}

	DisplayResult (BirthDate, BirthMonth, BirthYear);
}

function DisplayResult (BDate, BMonth, BYear)
{
	document.getElementById ('Years').textContent = BYear;
	document.getElementById ('Months').textContent = BMonth;
	document.getElementById ('Days').textContent = BDate;
}

function LeapChecker (Year) 
{
	if (Year % 4 == 0 || (Year % 100 == 0 && Year % 400 == 0))
	{
		Months [1] = 29;
	}

	else
	{
		Months [1] = 28;
	}
}