import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Separator } from './ui/separator';
import { Receipt, Car, Clock, Calendar, IndianRupee, X } from 'lucide-react';

const BillModal = ({ billInfo, onClose }) => {
  const { vehicleInfo, currentDateTime, total, standardHours, rushHours, nightHours, 
          standardCharge, rushCharge, nightCharge, hoursParked } = billInfo;

  const formatDateTime = (dateStr, timeStr) => {
    return `${dateStr} ${timeStr}`;
  };

  const getVehicleIcon = (vehicleType) => {
    switch (vehicleType) {
      case 'Car':
        return <Car className="w-5 h-5 text-blue-600" />;
      case 'Bike':
        return <Car className="w-5 h-5 text-green-600" />;
      case 'Truck':
        return <Car className="w-5 h-5 text-orange-600" />;
      default:
        return <Car className="w-5 h-5 text-gray-600" />;
    }
  };

  const printBill = () => {
    const printContent = `
      ========== PARKING BILL ==========
      Vehicle Type: ${vehicleInfo.vehicleType}
      Vehicle Number: ${vehicleInfo.vehicleNumber}
      Arrival: ${formatDateTime(vehicleInfo.arrivalDate, vehicleInfo.arrivalTime)}
      Departure: ${currentDateTime}
      Total Hours: ${hoursParked.toFixed(1)}
      ----------------------------------
      Standard Hours (${standardHours} hrs): ₹${standardCharge.toFixed(2)}
      ${rushHours > 0 ? `Rush Hours (${rushHours} hrs): ₹${rushCharge.toFixed(2)}` : ''}
      Night Hours (${nightHours} hrs): ₹${nightCharge.toFixed(2)}
      ----------------------------------
      TOTAL CHARGE: ₹${total.toFixed(2)}
      ==================================
    `;
    
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>Parking Bill</title>
          <style>
            body { font-family: monospace; padding: 20px; }
            pre { white-space: pre-wrap; }
          </style>
        </head>
        <body>
          <pre>${printContent}</pre>
          <script>window.print(); window.close();</script>
        </body>
      </html>
    `);
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white">
        <DialogHeader>
          <DialogTitle className="flex items-center text-xl font-semibold text-gray-900">
            <Receipt className="w-6 h-6 mr-2 text-green-600" />
            Parking Bill
          </DialogTitle>
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
            onClick={onClose}
          >
            <X className="w-4 h-4" />
          </Button>
        </DialogHeader>

        <div className="space-y-6">
          {/* Vehicle Information */}
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-l-blue-500">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3 mb-3">
                {getVehicleIcon(vehicleInfo.vehicleType)}
                <div>
                  <h3 className="font-semibold text-gray-900">{vehicleInfo.vehicleType}</h3>
                  <p className="text-sm text-gray-600">{vehicleInfo.vehicleNumber}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">Arrival:</span>
                  </div>
                  <span className="text-sm font-medium">
                    {formatDateTime(vehicleInfo.arrivalDate, vehicleInfo.arrivalTime)}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">Departure:</span>
                  </div>
                  <span className="text-sm font-medium">{currentDateTime}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">Total Duration:</span>
                  </div>
                  <span className="text-sm font-medium">{hoursParked.toFixed(1)} hours</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Charge Breakdown */}
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <IndianRupee className="w-4 h-4 mr-2" />
                Charge Breakdown
              </h3>
              
              <div className="space-y-3">
                {/* Standard Hours */}
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-sm text-gray-600">Standard Hours</span>
                    <span className="text-xs text-gray-400 ml-2">({standardHours} hrs)</span>
                  </div>
                  <span className="font-medium">₹{standardCharge.toFixed(2)}</span>
                </div>

                {/* Rush Hours */}
                {rushHours > 0 && (
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-sm text-gray-600">Rush Hours</span>
                      <span className="text-xs text-gray-400 ml-2">({rushHours} hrs)</span>
                    </div>
                    <span className="font-medium">₹{rushCharge.toFixed(2)}</span>
                  </div>
                )}

                {/* Night Hours */}
                {nightHours > 0 && (
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-sm text-gray-600">Night Hours</span>
                      <span className="text-xs text-gray-400 ml-2">({nightHours} hrs)</span>
                    </div>
                    <span className="font-medium">₹{nightCharge.toFixed(2)}</span>
                  </div>
                )}

                <Separator className="my-3" />

                {/* Total */}
                <div className="flex justify-between items-center pt-2">
                  <span className="text-lg font-semibold text-gray-900">Total Amount</span>
                  <span className="text-2xl font-bold text-green-600">₹{total.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Rate Information */}
          <Card className="bg-gray-50">
            <CardContent className="p-4">
              <h4 className="font-medium text-gray-700 mb-2">Rate Information</h4>
              <div className="text-xs text-gray-600 space-y-1">
                <p>• Standard: Car ₹200/hr, Bike ₹150/hr, Truck ₹300/hr</p>
                <p>• Rush Hour Extra: Car +₹50/hr, Bike +₹30/hr, Truck +₹70/hr</p>
                <p>• Night Hours (11PM-5AM): ₹100/hr for all vehicles</p>
                <p>• Rush Hours: Fri 5PM+, Weekends 11AM+, Holidays as scheduled</p>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <Button
              variant="outline"
              className="flex-1"
              onClick={printBill}
            >
              <Receipt className="w-4 h-4 mr-2" />
              Print Bill
            </Button>
            <Button
              className="flex-1 bg-green-600 hover:bg-green-700 text-white"
              onClick={onClose}
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BillModal;