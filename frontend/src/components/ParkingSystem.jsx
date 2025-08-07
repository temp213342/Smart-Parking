import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import ParkingGrid from './ParkingGrid';
import ParkingForm from './ParkingForm';
import BillModal from './BillModal';
import { mockParkVehicle, mockRemoveVehicle } from '../mock';
import { Car, Bike, Truck, Calendar, Clock, Users, IndianRupee } from 'lucide-react';

const ParkingSystem = ({ parkingData, setParkingData }) => {
  const [showParkingForm, setShowParkingForm] = useState(false);
  const [billInfo, setBillInfo] = useState(null);
  const [animatingSlot, setAnimatingSlot] = useState(null);
  const [animationType, setAnimationType] = useState(null);

  const occupiedSlots = parkingData.filter(slot => slot.vehicleType).length;
  const availableSlots = 20 - occupiedSlots;
  const totalRevenue = parkingData.reduce((sum, slot) => sum + (slot.charge || 0), 0);

  const handleParkVehicle = (vehicleData) => {
    const result = mockParkVehicle(vehicleData, parkingData, setParkingData);
    if (result.success) {
      setAnimatingSlot(result.slot);
      setAnimationType('parking');
      setTimeout(() => {
        setAnimatingSlot(null);
        setAnimationType(null);
      }, 2000);
    }
    return result;
  };

  const handleRemoveVehicle = (slotNumber) => {
    const currentDateTime = new Date().toLocaleString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }).replace(',', '');
    
    const result = mockRemoveVehicle(slotNumber, currentDateTime, parkingData, setParkingData);
    if (result.success) {
      setBillInfo({
        ...result.chargeInfo,
        vehicleInfo: result.vehicleInfo,
        currentDateTime
      });
      setAnimatingSlot(slotNumber);
      setAnimationType('removing');
      setTimeout(() => {
        setAnimatingSlot(null);
        setAnimationType(null);
      }, 2000);
    }
    return result;
  };

  const vehicleTypeStats = {
    Car: parkingData.filter(slot => slot.vehicleType === 'Car').length,
    Bike: parkingData.filter(slot => slot.vehicleType === 'Bike').length,
    Truck: parkingData.filter(slot => slot.vehicleType === 'Truck').length
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-3 rounded-xl">
                <Car className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Smart Parking System</h1>
                <p className="text-gray-600">West Bengal - 2025</p>
              </div>
            </div>
            <Button
              onClick={() => setShowParkingForm(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
            >
              <Car className="w-4 h-4 mr-2" />
              Park Vehicle
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white shadow-lg border-0 rounded-xl hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Available Slots</p>
                  <p className="text-3xl font-bold text-green-600">{availableSlots}</p>
                </div>
                <div className="bg-green-100 p-3 rounded-lg">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg border-0 rounded-xl hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Occupied Slots</p>
                  <p className="text-3xl font-bold text-red-500">{occupiedSlots}</p>
                </div>
                <div className="bg-red-100 p-3 rounded-lg">
                  <Car className="w-6 h-6 text-red-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg border-0 rounded-xl hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                  <p className="text-3xl font-bold text-purple-600">₹{totalRevenue.toFixed(0)}</p>
                </div>
                <div className="bg-purple-100 p-3 rounded-lg">
                  <IndianRupee className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg border-0 rounded-xl hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Current Time</p>
                  <p className="text-lg font-bold text-gray-800">{new Date().toLocaleTimeString()}</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Vehicle Type Statistics */}
        <Card className="bg-white shadow-lg border-0 rounded-xl mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-gray-800">
              <Calendar className="w-5 h-5 mr-2" />
              Vehicle Distribution
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Car className="w-6 h-6 text-blue-600" />
                  <span className="font-medium text-gray-700">Cars</span>
                </div>
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  {vehicleTypeStats.Car}
                </Badge>
              </div>
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Bike className="w-6 h-6 text-green-600" />
                  <span className="font-medium text-gray-700">Bikes</span>
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  {vehicleTypeStats.Bike}
                </Badge>
              </div>
              <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Truck className="w-6 h-6 text-orange-600" />
                  <span className="font-medium text-gray-700">Trucks</span>
                </div>
                <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                  {vehicleTypeStats.Truck}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Parking Grid */}
        <Card className="bg-white shadow-lg border-0 rounded-xl">
          <CardHeader>
            <CardTitle className="text-gray-800">Parking Layout</CardTitle>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-400 rounded"></div>
                <span className="text-gray-600">Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-blue-500 rounded"></div>
                <span className="text-gray-600">Car</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-600 rounded"></div>
                <span className="text-gray-600">Bike</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-orange-500 rounded"></div>
                <span className="text-gray-600">Truck</span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <ParkingGrid
              parkingData={parkingData}
              onRemoveVehicle={handleRemoveVehicle}
              animatingSlot={animatingSlot}
              animationType={animationType}
            />
          </CardContent>
        </Card>

        {/* Charge Information */}
        <Card className="bg-white shadow-lg border-0 rounded-xl mt-8">
          <CardHeader>
            <CardTitle className="text-gray-800">Parking Charges</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-700">Standard Charges (per hour)</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Car:</span>
                    <span className="font-medium">₹200</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Bike:</span>
                    <span className="font-medium">₹150</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Truck:</span>
                    <span className="font-medium">₹300</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-700">Rush Hour Extra (per hour)</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Car:</span>
                    <span className="font-medium">+₹50</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Bike:</span>
                    <span className="font-medium">+₹30</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Truck:</span>
                    <span className="font-medium">+₹70</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-700">Special Hours</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Night (11PM-5AM):</span>
                    <span className="font-medium">₹100/hr</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fridays (5PM+):</span>
                    <span className="font-medium">Rush Hour</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Weekends (11AM+):</span>
                    <span className="font-medium">Rush Hour</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Modals */}
      {showParkingForm && (
        <ParkingForm
          onClose={() => setShowParkingForm(false)}
          onSubmit={handleParkVehicle}
        />
      )}

      {billInfo && (
        <BillModal
          billInfo={billInfo}
          onClose={() => setBillInfo(null)}
        />
      )}
    </div>
  );
};

export default ParkingSystem;