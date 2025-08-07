import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card, CardContent } from './ui/card';
import { Calendar, Clock, Car, Bike, Truck, X } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const ParkingForm = ({ onClose, onSubmit }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    vehicleType: '',
    vehicleNumber: '',
    arrivalDate: '',
    arrivalTime: '',
    expectedPickupDate: '',
    expectedPickupTime: ''
  });

  // Set default values to current date/time
  React.useEffect(() => {
    const now = new Date();
    const currentDate = now.toISOString().split('T')[0];
    const currentTime = now.toTimeString().slice(0, 5);
    
    setFormData(prev => ({
      ...prev,
      arrivalDate: currentDate,
      arrivalTime: currentTime,
      expectedPickupDate: currentDate,
      expectedPickupTime: currentTime
    }));
  }, []);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.vehicleType || !formData.vehicleNumber || !formData.arrivalDate || 
        !formData.arrivalTime || !formData.expectedPickupDate || !formData.expectedPickupTime) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Format date for consistency (dd-mm-yy)
    const formatDate = (dateStr) => {
      const date = new Date(dateStr);
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = String(date.getFullYear()).slice(-2);
      return `${day}-${month}-${year}`;
    };

    const formattedData = {
      vehicleType: formData.vehicleType,
      vehicleNumber: formData.vehicleNumber.toUpperCase(),
      arrivalDate: formatDate(formData.arrivalDate),
      arrivalTime: formData.arrivalTime,
      expectedPickupDate: formatDate(formData.expectedPickupDate),
      expectedPickupTime: formData.expectedPickupTime,
      weekday: new Date(formData.arrivalDate).toLocaleDateString('en', { weekday: 'short' })
    };

    const result = onSubmit(formattedData);
    
    if (result.success) {
      toast({
        title: "Success",
        description: result.message,
      });
      onClose();
    } else {
      toast({
        title: "Error",
        description: result.message,
        variant: "destructive"
      });
    }
  };

  const getVehicleIcon = (type) => {
    switch (type) {
      case 'Car': return <Car className="w-5 h-5" />;
      case 'Bike': return <Bike className="w-5 h-5" />;
      case 'Truck': return <Truck className="w-5 h-5" />;
      default: return null;
    }
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white">
        <DialogHeader>
          <DialogTitle className="flex items-center text-xl font-semibold text-gray-900">
            <Car className="w-6 h-6 mr-2 text-blue-600" />
            Park New Vehicle
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

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Vehicle Type Selection */}
          <div className="space-y-3">
            <Label className="text-sm font-medium text-gray-700">Vehicle Type</Label>
            <div className="grid grid-cols-3 gap-3">
              {['Car', 'Bike', 'Truck'].map((type) => (
                <Card
                  key={type}
                  className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                    formData.vehicleType === type
                      ? 'ring-2 ring-blue-500 bg-blue-50 shadow-md'
                      : 'hover:bg-gray-50'
                  }`}
                  onClick={() => handleInputChange('vehicleType', type)}
                >
                  <CardContent className="p-4 text-center">
                    <div className="flex flex-col items-center space-y-2">
                      <div className={`p-2 rounded-lg ${
                        formData.vehicleType === type
                          ? 'bg-blue-100 text-blue-600'
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {getVehicleIcon(type)}
                      </div>
                      <span className="text-xs font-medium">{type}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Vehicle Number */}
          <div className="space-y-2">
            <Label htmlFor="vehicleNumber" className="text-sm font-medium text-gray-700">
              Vehicle Number
            </Label>
            <Input
              id="vehicleNumber"
              placeholder="e.g. WB01A1234"
              value={formData.vehicleNumber}
              onChange={(e) => handleInputChange('vehicleNumber', e.target.value)}
              className="w-full"
              style={{ textTransform: 'uppercase' }}
            />
          </div>

          {/* Arrival Details */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="arrivalDate" className="text-sm font-medium text-gray-700 flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                Arrival Date
              </Label>
              <Input
                id="arrivalDate"
                type="date"
                value={formData.arrivalDate}
                onChange={(e) => handleInputChange('arrivalDate', e.target.value)}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="arrivalTime" className="text-sm font-medium text-gray-700 flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                Arrival Time
              </Label>
              <Input
                id="arrivalTime"
                type="time"
                value={formData.arrivalTime}
                onChange={(e) => handleInputChange('arrivalTime', e.target.value)}
                className="w-full"
              />
            </div>
          </div>

          {/* Expected Pickup Details */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="expectedPickupDate" className="text-sm font-medium text-gray-700">
                Expected Pickup Date
              </Label>
              <Input
                id="expectedPickupDate"
                type="date"
                value={formData.expectedPickupDate}
                onChange={(e) => handleInputChange('expectedPickupDate', e.target.value)}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="expectedPickupTime" className="text-sm font-medium text-gray-700">
                Expected Pickup Time
              </Label>
              <Input
                id="expectedPickupTime"
                type="time"
                value={formData.expectedPickupTime}
                onChange={(e) => handleInputChange('expectedPickupTime', e.target.value)}
                className="w-full"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3 pt-4">
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
            >
              Park Vehicle
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ParkingForm;