import React from 'react';
import { Car, Bike, Truck, X } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const ParkingGrid = ({ parkingData, onRemoveVehicle, animatingSlot, animationType }) => {
  const getVehicleIcon = (vehicleType) => {
    switch (vehicleType) {
      case 'Car':
        return <Car className="w-8 h-8" />;
      case 'Bike':
        return <Bike className="w-8 h-8" />;
      case 'Truck':
        return <Truck className="w-8 h-8" />;
      default:
        return null;
    }
  };

  const getVehicleColor = (vehicleType) => {
    switch (vehicleType) {
      case 'Car':
        return 'bg-blue-500 text-white';
      case 'Bike':
        return 'bg-green-600 text-white';
      case 'Truck':
        return 'bg-orange-500 text-white';
      default:
        return 'bg-green-400 text-white';
    }
  };

  const handleRemoveClick = (slotNumber) => {
    const result = onRemoveVehicle(slotNumber);
    if (!result.success) {
      alert(result.message);
    }
  };

  return (
    <div className="parking-lot-container">
      {/* Road animation container */}
      <div className="road-system">
        <div className="main-road"></div>
        <div className="entry-road"></div>
        <div className="exit-road"></div>
      </div>

      {/* Parking Grid */}
      <div className="parking-grid">
        {parkingData.map((slot) => {
          const isAnimating = animatingSlot === slot.slot;
          const vehicleClass = slot.vehicleType ? getVehicleColor(slot.vehicleType) : 'bg-green-400 text-white';
          
          return (
            <Card 
              key={slot.slot} 
              className={`parking-slot ${vehicleClass} ${isAnimating ? 'animating' : ''} ${isAnimating && animationType === 'parking' ? 'vehicle-entering' : ''} ${isAnimating && animationType === 'removing' ? 'vehicle-exiting' : ''}`}
            >
              <CardContent className="p-4 h-full flex flex-col justify-between relative">
                {/* Slot number */}
                <div className="absolute top-2 left-2">
                  <Badge variant="outline" className="bg-white/90 text-gray-800 text-xs">
                    {slot.slot}
                  </Badge>
                </div>

                {/* Vehicle content */}
                <div className="flex-1 flex flex-col items-center justify-center space-y-2">
                  {slot.vehicleType ? (
                    <>
                      {/* Vehicle icon with animation */}
                      <div className={`vehicle-icon ${isAnimating ? 'vehicle-moving' : ''}`}>
                        {getVehicleIcon(slot.vehicleType)}
                      </div>
                      
                      {/* Vehicle details */}
                      <div className="text-center">
                        <p className="text-xs font-semibold">{slot.vehicleNumber}</p>
                        <p className="text-xs opacity-90">{slot.arrivalTime}</p>
                      </div>

                      {/* Remove button */}
                      <Button
                        variant="destructive"
                        size="sm"
                        className="w-full bg-red-500 hover:bg-red-600 text-white"
                        onClick={() => handleRemoveClick(slot.slot)}
                      >
                        <X className="w-3 h-3 mr-1" />
                        Remove
                      </Button>
                    </>
                  ) : (
                    <>
                      <div className="empty-slot-icon">
                        <div className="parking-lines"></div>
                      </div>
                      <p className="text-xs font-medium">Available</p>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <style jsx>{`
        .parking-lot-container {
          position: relative;
          width: 100%;
          perspective: 1000px;
        }

        .road-system {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 0;
        }

        .main-road {
          position: absolute;
          top: 50%;
          left: -20px;
          right: -20px;
          height: 80px;
          background: linear-gradient(180deg, #4a5568 0%, #2d3748 50%, #4a5568 100%);
          transform: translateY(-50%);
          border-radius: 8px;
        }

        .main-road::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 4px;
          background: repeating-linear-gradient(
            90deg,
            #fff 0,
            #fff 20px,
            transparent 20px,
            transparent 40px
          );
          transform: translateY(-50%);
        }

        .entry-road, .exit-road {
          position: absolute;
          width: 60px;
          height: 200px;
          background: linear-gradient(90deg, #4a5568 0%, #2d3748 50%, #4a5568 100%);
          border-radius: 8px;
        }

        .entry-road {
          top: 10%;
          left: -40px;
          transform: rotate(-15deg);
        }

        .exit-road {
          bottom: 10%;
          right: -40px;
          transform: rotate(15deg);
        }

        .parking-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 16px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 0;
        }

        .parking-slot {
          height: 140px;
          transition: all 0.3s ease;
          transform-style: preserve-3d;
          cursor: pointer;
          border: 2px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .parking-slot:hover {
          transform: translateY(-4px) rotateX(5deg);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }

        .parking-slot.animating {
          transform: perspective(500px) rotateY(10deg) translateZ(20px);
        }

        .vehicle-icon {
          transition: all 0.6s ease;
        }

        .vehicle-moving {
          animation: vehicleMove 2s ease-in-out;
        }

        .vehicle-entering {
          animation: slideInFromLeft 2s ease-out;
        }

        .vehicle-exiting {
          animation: slideOutToRight 2s ease-in;
        }

        .empty-slot-icon {
          width: 100%;
          height: 60px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .parking-lines {
          width: 80%;
          height: 2px;
          background: rgba(255, 255, 255, 0.6);
          position: relative;
        }

        .parking-lines::before,
        .parking-lines::after {
          content: '';
          position: absolute;
          width: 20px;
          height: 2px;
          background: rgba(255, 255, 255, 0.6);
          top: -8px;
        }

        .parking-lines::before {
          left: 0;
          transform: rotate(45deg);
        }

        .parking-lines::after {
          right: 0;
          transform: rotate(-45deg);
        }

        @keyframes vehicleMove {
          0% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-10px) scale(1.1);
          }
          100% {
            transform: translateY(0) scale(1);
          }
        }

        @keyframes slideInFromLeft {
          0% {
            transform: translateX(-300px) scale(0.5) rotateZ(-10deg);
            opacity: 0;
          }
          30% {
            transform: translateX(-100px) scale(0.7) rotateZ(-5deg);
            opacity: 0.7;
          }
          70% {
            transform: translateX(20px) scale(1.1) rotateZ(2deg);
            opacity: 0.9;
          }
          100% {
            transform: translateX(0) scale(1) rotateZ(0deg);
            opacity: 1;
          }
        }

        @keyframes slideOutToRight {
          0% {
            transform: translateX(0) scale(1) rotateZ(0deg);
            opacity: 1;
          }
          30% {
            transform: translateX(20px) scale(1.1) rotateZ(2deg);
            opacity: 0.9;
          }
          70% {
            transform: translateX(100px) scale(0.7) rotateZ(5deg);
            opacity: 0.7;
          }
          100% {
            transform: translateX(300px) scale(0.5) rotateZ(10deg);
            opacity: 0;
          }
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .parking-grid {
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 12px;
            padding: 20px 0;
          }
          
          .parking-slot {
            height: 120px;
          }
          
          .main-road {
            height: 60px;
          }
        }
      `}</style>
    </div>
  );
};

export default ParkingGrid;