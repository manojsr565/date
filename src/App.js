import React, { useState } from 'react';
import { Heart, Smile, Frown, Sparkles, CalendarDays, Coffee, Utensils, Gamepad2, Tv, Fish, CheckCircle } from 'lucide-react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [dateName, setDateName] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [currentWeekOffset, setCurrentWeekOffset] = useState(0);

  // Activity options with their Lucide React icons
  const activityOptions = [
    { name: 'Coffee', icon: Coffee },
    { name: 'Dinner', icon: Utensils },
    { name: 'Game Night', icon: Gamepad2 },
    { name: 'Arcade', icon: Gamepad2 },
    { name: 'Beach', icon: Fish },
    { name: 'Movie', icon: Tv },
  ];

  // Function to get the days for the specified week offset
  const getDaysForWeek = (offset) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const weekDays = [];
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() + (offset * 7));

    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());

    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      weekDays.push(day);
    }
    return weekDays;
  };

  const handleActivityChange = (activityName) => {
    setSelectedActivities((prev) =>
      prev.includes(activityName)
        ? prev.filter((a) => a !== activityName)
        : [...prev, activityName]
    );
  };

  const renderContent = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    switch (currentPage) {
      case 'home':
        return (
          <div className="flex flex-col items-center justify-center h-full text-center p-6 space-y-8 animate-fade-in">
            <h1 className="text-6xl font-extrabold text-white drop-shadow-lg animate-pulse-once">Welcome!</h1>
            <p className="text-2xl text-white font-medium drop-shadow-md">
              "Every moment with you is a new adventure, and I can't wait for our next chapter."
            </p>
            <div className="flex space-x-6">
              <button
                onClick={() => setCurrentPage('askDate')}
                className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 active:scale-95 button-press-effect"
              >
                Yes, I'm Ready!
              </button>
              <button
                onClick={() => setCurrentPage('notReady')}
                className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 active:scale-95 button-press-effect"
              >
                No, Not Yet.
              </button>
            </div>
          </div>
        );

      case 'notReady':
        return (
          <div className="flex flex-col items-center justify-center h-full text-center p-6 space-y-8 animate-fade-in">
            <Frown size={96} className="text-yellow-400 animate-bounce-slow" />
            <p className="text-3xl text-white font-medium drop-shadow-md">
              Please give it a try whenever you're ready! My heart awaits.
            </p>
            <button
              onClick={() => setCurrentPage('home')}
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 active:scale-95 button-press-effect"
            >
              Go Back
            </button>
          </div>
        );

      case 'askDate':
        return (
          <div className="flex flex-col items-center justify-center h-full text-center p-6 space-y-8 animate-fade-in">
            <Smile size={96} className="text-yellow-400 animate-curious-look" />
            <p className="text-3xl text-white font-medium drop-shadow-md">
              Would you like to go on a date?
            </p>
            <div className="flex space-x-6">
              <button
                onClick={() => setCurrentPage('nameInput')}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 active:scale-95 button-press-effect"
              >
                Yes!
              </button>
              <button
                onClick={() => setCurrentPage('maybe')}
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 active:scale-95 button-press-effect"
              >
                Maybe?
              </button>
              <button
                onClick={() => setCurrentPage('sad')}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 active:scale-95 button-press-effect"
              >
                No
              </button>
            </div>
          </div>
        );

      case 'sad':
        return (
          <div className="flex flex-col items-center justify-center h-full text-center p-6 space-y-8 animate-fade-in">
            <Frown size={96} className="text-red-400 animate-sad-shake" />
            <p className="text-3xl text-white font-medium drop-shadow-md">
              Don't you want to give it a try?
            </p>
            <div className="flex space-x-6">
              <button
                onClick={() => setCurrentPage('askDate')}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 active:scale-95 button-press-effect"
              >
                Sure!
              </button>
              <button
                onClick={() => setCurrentPage('thanksForTrying')}
                className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 active:scale-95 button-press-effect"
              >
                Nah!
              </button>
            </div>
          </div>
        );

      case 'thanksForTrying':
        return (
          <div className="flex flex-col items-center justify-center h-full text-center p-6 space-y-8 animate-fade-in">
            <Heart size={96} className="text-pink-400 animate-heartbeat" />
            <p className="text-3xl text-white font-medium drop-shadow-md">
              Thanks for trying! Maybe another time.
            </p>
          </div>
        );

      case 'maybe':
        return (
          <div className="flex flex-col items-center justify-center h-full text-center p-6 space-y-8 animate-fade-in">
            <Sparkles size={96} className="text-purple-400 animate-sparkle-look" />
            <p className="text-3xl text-white font-medium drop-shadow-md">
              I am sure you won't regret a "Yes"! {' '}
            </p>
            <div className="flex space-x-6">
              <button
                onClick={() => setCurrentPage('nameInput')}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 active:scale-95 button-press-effect"
              >
                Yes!
              </button>
              <button
                onClick={() => setCurrentPage('sad')}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 active:scale-95 button-press-effect"
              >
                Sorry...
              </button>
            </div>
          </div>
        );

      case 'nameInput':
        const currentWeekDays = getDaysForWeek(currentWeekOffset);
        const displayMonthYear = currentWeekDays[0].toLocaleString('default', { month: 'long', year: 'numeric' });

        return (
          <div className="flex flex-col items-center justify-center h-full text-center p-6 space-y-8 animate-fade-in">
            <Smile size={96} className="text-green-400 animate-bounce-in" />
            <p className="text-3xl text-white font-medium drop-shadow-md">
              Thanks for saying yes! What's your name?
            </p>
            <input
              type="text"
              className="p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 text-lg text-gray-800"
              placeholder="Enter your name"
              value={dateName}
              onChange={(e) => setDateName(e.target.value)}
            />
            <p className="text-3xl text-white font-medium drop-shadow-md">
              Now, let's pick a date from the calendar!
            </p>
            <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
              <div className="text-xl font-bold text-gray-800 mb-4 flex justify-between items-center">
                <button
                  onClick={() => setCurrentWeekOffset(prev => Math.max(0, prev - 1))}
                  className={`p-2 rounded-full ${currentWeekOffset === 0 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-200'}`}
                  disabled={currentWeekOffset === 0}
                >
                  &larr; Prev Week
                </button>
                <span>{displayMonthYear}</span>
                <button
                  onClick={() => setCurrentWeekOffset(prev => prev + 1)}
                  className="p-2 rounded-full text-gray-700 hover:bg-gray-200"
                >
                  Next Week &rarr;
                </button>
              </div>
              <div className="grid grid-cols-7 gap-2 text-gray-700 font-semibold mb-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="text-center">{day}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-2">
                {currentWeekDays.map((day, index) => {
                  const isPastDay = day < today; // Check if the day is before today
                  const isToday = day.toDateString() === today.toDateString(); // Check if it's today
                  const isSelectable = day >= today && day.getTime() <= (today.getTime() + (6 * 24 * 60 * 60 * 1000)); // Today + next 6 days

                  return (
                    <button
                      key={index}
                      onClick={() => {
                        if (!isPastDay && isSelectable) { // Only allow selection of today or future within 7 days
                          setSelectedDate(day);
                          setCurrentPage('activitySelection');
                        }
                      }}
                      className={`p-2 rounded-lg text-center font-medium
                        ${isPastDay ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : ''}
                        ${!isPastDay && !isSelectable ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : ''}
                        ${isSelectable && !isPastDay && !isToday ? 'bg-pink-100 text-pink-700 hover:bg-pink-200 cursor-pointer transition duration-200' : ''}
                        ${isToday ? 'bg-green-300 text-green-900 font-bold border-2 border-green-500' : ''}
                        ${selectedDate && selectedDate.toDateString() === day.toDateString() ? 'ring-2 ring-pink-500' : ''}
                        ${!isSelectable || isPastDay ? 'opacity-50' : ''}
                      `}
                      disabled={isPastDay || !isSelectable} // Disable past and outside 7-day window
                    >
                      {day.getDate()}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        );

      case 'activitySelection':
        return (
          <div className="flex flex-col items-center justify-center h-full text-center p-6 space-y-8 animate-fade-in">
            <Sparkles size={96} className="text-yellow-300 animate-spin-slow" />
            <p className="text-3xl text-white font-medium drop-shadow-md">
              Great! What activities would you like to do? (Choose multiple!)
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-2xl">
              {activityOptions.map((activity) => (
                <label
                  key={activity.name}
                  className={`flex flex-col items-center p-4 bg-white rounded-lg shadow-lg cursor-pointer transition duration-200 transform hover:scale-105
                    ${selectedActivities.includes(activity.name) ? 'ring-4 ring-green-500' : ''}
                  `}
                >
                  <input
                    type="checkbox"
                    checked={selectedActivities.includes(activity.name)}
                    onChange={() => handleActivityChange(activity.name)}
                    className="hidden"
                  />
                  <activity.icon size={48} className="text-pink-500 mb-2" />
                  <span className="text-lg font-semibold text-gray-800">{activity.name}</span>
                </label>
              ))}
            </div>
            <button
              onClick={() => setCurrentPage('summary')}
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg mt-8 transition duration-300 ease-in-out transform hover:scale-105 active:scale-95 button-press-effect"
            >
              Show My Date Plan!
            </button>
          </div>
        );

      case 'summary':
        const activitiesText = selectedActivities.length > 0 ? selectedActivities.join(', ') : 'nothing specific yet (you can always decide later!)';
        const formattedDate = selectedDate ? selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : 'a date not chosen yet';

        return (
          <div className="flex flex-col items-center justify-center h-full text-center p-6 space-y-8 animate-fade-in">
            <CheckCircle size={96} className="text-green-500 animate-pop-in" />
            <h2 className="text-4xl font-bold text-white drop-shadow-lg">
              It's a Date!
            </h2>
            <p className="text-2xl text-white font-medium drop-shadow-md">
              Max is taking you out on a date with <span className="font-bold text-pink-300">{dateName || 'someone special'}</span> on <span className="font-bold text-pink-300">{formattedDate}</span> to <span className="font-bold text-pink-300">{activitiesText}</span>!
            </p>
            <p className="text-xl text-white drop-shadow-md">
              Get ready for an amazing time!
            </p>
            <button
              onClick={() => {
                setCurrentPage('home');
                setDateName('');
                setSelectedDate(null);
                setSelectedActivities([]);
                setCurrentWeekOffset(0);
              }}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg mt-8 transition duration-300 ease-in-out transform hover:scale-105 active:scale-95 button-press-effect"
            >
              Start Over
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 flex items-center justify-center font-inter p-4">
      {renderContent()}
    </div>
  );
};

export default App;
