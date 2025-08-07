// Mock data for parking system
export const mockParkingData = [
  { slot: 1, vehicleType: null, vehicleNumber: null, arrivalDate: null, arrivalTime: null, expectedPickupDate: null, expectedPickupTime: null, weekday: null, charge: 0 },
  { slot: 2, vehicleType: "Bike", vehicleNumber: "WB02B5678", arrivalDate: "01-02-25", arrivalTime: "09:30", expectedPickupDate: "01-02-25", expectedPickupTime: "12:00", weekday: "Mon", charge: 450.0 },
  { slot: 3, vehicleType: null, vehicleNumber: null, arrivalDate: null, arrivalTime: null, expectedPickupDate: null, expectedPickupTime: null, weekday: null, charge: 0 },
  { slot: 4, vehicleType: "Car", vehicleNumber: "WB01A1234", arrivalDate: "01-02-25", arrivalTime: "10:00", expectedPickupDate: "01-02-25", expectedPickupTime: "14:00", weekday: "Mon", charge: 800.0 },
  { slot: 5, vehicleType: null, vehicleNumber: null, arrivalDate: null, arrivalTime: null, expectedPickupDate: null, expectedPickupTime: null, weekday: null, charge: 0 },
  { slot: 6, vehicleType: "Truck", vehicleNumber: "WB03C9101", arrivalDate: "01-02-25", arrivalTime: "08:00", expectedPickupDate: "01-02-25", expectedPickupTime: "16:00", weekday: "Mon", charge: 2400.0 },
  { slot: 7, vehicleType: null, vehicleNumber: null, arrivalDate: null, arrivalTime: null, expectedPickupDate: null, expectedPickupTime: null, weekday: null, charge: 0 },
  { slot: 8, vehicleType: "Car", vehicleNumber: "WB04D1121", arrivalDate: "31-01-25", arrivalTime: "22:00", expectedPickupDate: "01-02-25", expectedPickupTime: "06:00", weekday: "Tue", charge: 1600.0 },
  { slot: 9, vehicleType: "Bike", vehicleNumber: "WB05E3141", arrivalDate: "01-02-25", arrivalTime: "15:00", expectedPickupDate: "01-02-25", expectedPickupTime: "18:00", weekday: "Mon", charge: 510.0 },
  { slot: 10, vehicleType: null, vehicleNumber: null, arrivalDate: null, arrivalTime: null, expectedPickupDate: null, expectedPickupTime: null, weekday: null, charge: 0 },
  { slot: 11, vehicleType: "Truck", vehicleNumber: "WB06F7171", arrivalDate: "01-02-25", arrivalTime: "19:00", expectedPickupDate: "01-02-25", expectedPickupTime: "23:00", weekday: "Mon", charge: 1200.0 },
  { slot: 12, vehicleType: null, vehicleNumber: null, arrivalDate: null, arrivalTime: null, expectedPickupDate: null, expectedPickupTime: null, weekday: null, charge: 0 },
  { slot: 13, vehicleType: "Car", vehicleNumber: "WB07G8181", arrivalDate: "01-02-25", arrivalTime: "07:00", expectedPickupDate: "01-02-25", expectedPickupTime: "11:00", weekday: "Mon", charge: 1000.0 },
  { slot: 14, vehicleType: null, vehicleNumber: null, arrivalDate: null, arrivalTime: null, expectedPickupDate: null, expectedPickupTime: null, weekday: null, charge: 0 },
  { slot: 15, vehicleType: "Bike", vehicleNumber: "WB08H9191", arrivalDate: "01-02-25", arrivalTime: "21:00", expectedPickupDate: "01-02-25", expectedPickupTime: "23:00", weekday: "Mon", charge: 400.0 },
  { slot: 16, vehicleType: null, vehicleNumber: null, arrivalDate: null, arrivalTime: null, expectedPickupDate: null, expectedPickupTime: null, weekday: null, charge: 0 },
  { slot: 17, vehicleType: "Truck", vehicleNumber: "WB09I2121", arrivalDate: "01-02-25", arrivalTime: "12:00", expectedPickupDate: "01-02-25", expectedPickupTime: "18:00", weekday: "Mon", charge: 1800.0 },
  { slot: 18, vehicleType: null, vehicleNumber: null, arrivalDate: null, arrivalTime: null, expectedPickupDate: null, expectedPickupTime: null, weekday: null, charge: 0 },
  { slot: 19, vehicleType: "Car", vehicleNumber: "WB10J3131", arrivalDate: "01-02-25", arrivalTime: "20:00", expectedPickupDate: "01-02-25", expectedPickupTime: "22:00", weekday: "Mon", charge: 400.0 },
  { slot: 20, vehicleType: null, vehicleNumber: null, arrivalDate: null, arrivalTime: null, expectedPickupDate: null, expectedPickupTime: null, weekday: null, charge: 0 }
];

export const westBengalHolidays2025 = [
  { date: "01-01-2025", holidayName: "New Year's Day", rushHrFrom: "00:00", rushHrTo: "23:59" },
  { date: "26-01-2025", holidayName: "Republic Day", rushHrFrom: "08:00", rushHrTo: "14:00" },
  { date: "02-02-2025", holidayName: "Vasant Panchami", rushHrFrom: "09:00", rushHrTo: "17:00" },
  { date: "26-02-2025", holidayName: "Maha Shivaratri", rushHrFrom: "09:00", rushHrTo: "17:00" },
  { date: "13-03-2025", holidayName: "Holika Dahana", rushHrFrom: "09:00", rushHrTo: "22:00" },
  { date: "14-03-2025", holidayName: "Holi", rushHrFrom: "09:00", rushHrTo: "20:00" },
  { date: "28-03-2025", holidayName: "Jamat Ul-Vida", rushHrFrom: "09:00", rushHrTo: "17:00" },
  { date: "30-03-2025", holidayName: "Chaitra Sukhladi / Ugadi / Gudi Padwa", rushHrFrom: "09:00", rushHrTo: "17:00" },
  { date: "31-03-2025", holidayName: "Eid-ul-Fitr", rushHrFrom: "08:00", rushHrTo: "21:00" },
  { date: "06-04-2025", holidayName: "Rama Navami", rushHrFrom: "09:00", rushHrTo: "17:00" },
  { date: "10-04-2025", holidayName: "Mahavir Jayanti", rushHrFrom: "09:00", rushHrTo: "17:00" },
  { date: "18-04-2025", holidayName: "Good Friday", rushHrFrom: "08:00", rushHrTo: "16:00" },
  { date: "12-05-2025", holidayName: "Buddha Purnima", rushHrFrom: "09:00", rushHrTo: "18:00" },
  { date: "07-06-2025", holidayName: "Eid ul-Adha (Bakrid)", rushHrFrom: "08:00", rushHrTo: "21:00" },
  { date: "06-07-2025", holidayName: "Muharram", rushHrFrom: "07:00", rushHrTo: "19:00" },
  { date: "09-08-2025", holidayName: "Raksha Bandhan", rushHrFrom: "10:00", rushHrTo: "18:00" },
  { date: "15-08-2025", holidayName: "Independence Day", rushHrFrom: "08:00", rushHrTo: "14:00" },
  { date: "16-08-2025", holidayName: "Janmashtami", rushHrFrom: "08:00", rushHrTo: "23:00" },
  { date: "27-08-2025", holidayName: "Ganesh Chaturthi", rushHrFrom: "08:00", rushHrTo: "21:00" },
  { date: "05-09-2025", holidayName: "Milad-un-Nabi / Onam", rushHrFrom: "09:00", rushHrTo: "17:00" },
  { date: "29-09-2025", holidayName: "Maha Saptami", rushHrFrom: "06:00", rushHrTo: "23:59" },
  { date: "30-09-2025", holidayName: "Maha Ashtami", rushHrFrom: "06:00", rushHrTo: "23:59" },
  { date: "01-10-2025", holidayName: "Maha Navami", rushHrFrom: "06:00", rushHrTo: "23:59" },
  { date: "02-10-2025", holidayName: "Mahatma Gandhi Jayanti / Dussehra", rushHrFrom: "08:00", rushHrTo: "17:00" },
  { date: "07-10-2025", holidayName: "Maharishi Valmiki Jayanti", rushHrFrom: "09:00", rushHrTo: "17:00" },
  { date: "20-10-2025", holidayName: "Diwali", rushHrFrom: "10:00", rushHrTo: "23:59" },
  { date: "22-10-2025", holidayName: "Govardhan Puja", rushHrFrom: "09:00", rushHrTo: "18:00" },
  { date: "23-10-2025", holidayName: "Bhai Duj", rushHrFrom: "10:00", rushHrTo: "18:00" },
  { date: "05-11-2025", holidayName: "Guru Nanak Jayanti", rushHrFrom: "09:00", rushHrTo: "19:00" },
  { date: "24-11-2025", holidayName: "Guru Tegh Bahadur's Martyrdom Day", rushHrFrom: "09:00", rushHrTo: "17:00" },
  { date: "25-12-2025", holidayName: "Christmas Day", rushHrFrom: "09:00", rushHrTo: "22:00" },
  { date: "31-12-2025", holidayName: "New Year's Eve", rushHrFrom: "00:00", rushHrTo: "23:59" }
];

// Charge calculation functions
export const standardRates = {
  Car: 200,
  Bike: 150,
  Truck: 300
};

export const rushExtra = {
  Car: 50,
  Bike: 30,
  Truck: 70
};

export const nightRate = 100;

export const calculateCharge = (arrivalDateTime, currentDateTime, vehicleType, holidays = westBengalHolidays2025) => {
  const arrival = new Date(arrivalDateTime);
  const current = new Date(currentDateTime);
  
  const deltaMs = current.getTime() - arrival.getTime();
  const totalSeconds = Math.floor(deltaMs / 1000);
  const fullHours = Math.floor(totalSeconds / 3600);
  const partialHour = (totalSeconds % 3600) > 0;
  
  let standardHours = 0;
  let rushHours = 0;
  let nightHours = 0;
  
  for (let hour = 0; hour < fullHours; hour++) {
    const currentTime = new Date(arrival.getTime() + (hour * 60 * 60 * 1000));
    const currentDate = currentTime.toISOString().split('T')[0];
    const currentWeekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][currentTime.getDay()];
    const currentHour = currentTime.getHours();
    
    // Check for holidays
    const holiday = holidays.find(h => h.date.split('-').reverse().join('-') === currentDate);
    
    if (holiday) {
      const rushStart = parseInt(holiday.rushHrFrom.split(':')[0]);
      const rushEnd = parseInt(holiday.rushHrTo.split(':')[0]);
      if (rushStart <= currentHour && currentHour < rushEnd) {
        rushHours++;
        continue;
      }
    } else {
      // Regular rush hours
      if ((currentWeekday === 'Fri' && currentHour >= 17) ||
          (['Sat', 'Sun'].includes(currentWeekday) && currentHour >= 11)) {
        rushHours++;
        continue;
      }
    }
    
    // Night hours (11 PM to 5 AM)
    if (currentHour >= 23 || currentHour < 5) {
      nightHours++;
    } else {
      standardHours++;
    }
  }
  
  const standardCharge = standardHours * standardRates[vehicleType];
  const rushCharge = rushHours * (standardRates[vehicleType] + rushExtra[vehicleType]);
  const nightCharge = nightHours * nightRate;
  const total = standardCharge + rushCharge + nightCharge;
  
  return {
    total,
    standardHours,
    rushHours,
    nightHours,
    standardCharge,
    rushCharge,
    nightCharge,
    hoursParked: fullHours + (partialHour ? 0.5 : 0)
  };
};

// Mock functions for frontend functionality
export const mockParkVehicle = (vehicleData, parkingData, setParkingData) => {
  const emptySlot = parkingData.find(slot => !slot.vehicleType);
  if (!emptySlot) {
    return { success: false, message: "No available slots!" };
  }
  
  const updatedData = parkingData.map(slot => {
    if (slot.slot === emptySlot.slot) {
      return {
        ...slot,
        ...vehicleData,
        charge: 0
      };
    }
    return slot;
  });
  
  setParkingData(updatedData);
  return { success: true, message: `Vehicle parked at slot ${emptySlot.slot}`, slot: emptySlot.slot };
};

export const mockRemoveVehicle = (slotNumber, currentDateTime, parkingData, setParkingData) => {
  const slot = parkingData.find(s => s.slot === slotNumber);
  if (!slot || !slot.vehicleType) {
    return { success: false, message: "Slot is empty!" };
  }
  
  const arrivalDateTime = `${slot.arrivalDate} ${slot.arrivalTime}`;
  const chargeInfo = calculateCharge(arrivalDateTime, currentDateTime, slot.vehicleType);
  
  const updatedData = parkingData.map(s => {
    if (s.slot === slotNumber) {
      return {
        slot: slotNumber,
        vehicleType: null,
        vehicleNumber: null,
        arrivalDate: null,
        arrivalTime: null,
        expectedPickupDate: null,
        expectedPickupTime: null,
        weekday: null,
        charge: 0
      };
    }
    return s;
  });
  
  setParkingData(updatedData);
  return { success: true, chargeInfo, vehicleInfo: slot };
};