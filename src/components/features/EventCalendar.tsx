'use client'

import React, { useState } from 'react'
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday, isSameDay } from 'date-fns'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ChevronLeft, ChevronRight, Calendar, Clock, MapPin } from 'lucide-react'

interface Event {
  id: string
  title: string
  date: Date
  time: string
  location: string
  category: string
  description?: string
}

interface EventCalendarProps {
  events: Event[]
  className?: string
}

export function EventCalendar({ events, className = '' }: EventCalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const monthStart = startOfMonth(currentDate)
  const monthEnd = endOfMonth(currentDate)
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd })

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
  }

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
  }

  const getEventsForDate = (date: Date) => {
    return events.filter(event => isSameDay(event.date, date))
  }

  const selectedDateEvents = selectedDate ? getEventsForDate(selectedDate) : []

  const categoryColors: { [key: string]: string } = {
    'Dining': 'bg-orange-100 text-orange-800',
    'Tennis': 'bg-green-100 text-green-800',
    'Spa': 'bg-purple-100 text-purple-800',
    'Fitness': 'bg-blue-100 text-blue-800',
    'Junior': 'bg-yellow-100 text-yellow-800',
    'Social': 'bg-pink-100 text-pink-800'
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Calendar Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-serif font-semibold">
          {format(currentDate, 'MMMM yyyy')}
        </h2>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" onClick={goToPreviousMonth}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" onClick={goToNextMonth}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar Grid */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-7 gap-1 mb-2">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="text-center text-sm font-medium text-muted-foreground p-2">
                {day}
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-7 gap-1">
            {days.map(day => {
              const dayEvents = getEventsForDate(day)
              const isCurrentMonth = isSameMonth(day, currentDate)
              const isDayToday = isToday(day)
              const isSelected = selectedDate && isSameDay(day, selectedDate)

              return (
                <button
                  key={day.toISOString()}
                  onClick={() => setSelectedDate(day)}
                  className={`
                    relative h-20 p-1 text-left border rounded-lg transition-colors
                    ${isCurrentMonth ? 'bg-white hover:bg-gray-50' : 'bg-gray-50 text-muted-foreground'}
                    ${isDayToday ? 'border-brand-coral bg-brand-coral/5' : 'border-gray-200'}
                    ${isSelected ? 'ring-2 ring-brand-coral' : ''}
                  `}
                >
                  <span className={`text-sm font-medium ${isDayToday ? 'text-brand-coral' : ''}`}>
                    {format(day, 'd')}
                  </span>
                  
                  {dayEvents.length > 0 && (
                    <div className="mt-1 space-y-1">
                      {dayEvents.slice(0, 2).map(event => (
                        <div
                          key={event.id}
                          className="text-xs p-1 rounded bg-brand-coral/10 text-brand-coral truncate"
                        >
                          {event.title}
                        </div>
                      ))}
                      {dayEvents.length > 2 && (
                        <div className="text-xs text-muted-foreground">
                          +{dayEvents.length - 2} more
                        </div>
                      )}
                    </div>
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Event Details */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>
                  {selectedDate ? format(selectedDate, 'EEEE, MMMM d') : 'Select a date'}
                </span>
              </CardTitle>
              <CardDescription>
                {selectedDate 
                  ? `${selectedDateEvents.length} event${selectedDateEvents.length !== 1 ? 's' : ''}`
                  : 'Click on a date to see events'
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              {selectedDateEvents.length > 0 ? (
                <div className="space-y-4">
                  {selectedDateEvents.map(event => (
                    <div key={event.id} className="border-l-4 border-brand-coral pl-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">{event.title}</h3>
                        <Badge 
                          variant="secondary" 
                          className={categoryColors[event.category] || 'bg-gray-100 text-gray-800'}
                        >
                          {event.category}
                        </Badge>
                      </div>
                      
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      
                      {event.description && (
                        <p className="text-sm text-muted-foreground mt-2">
                          {event.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              ) : selectedDate ? (
                <p className="text-muted-foreground text-center py-8">
                  No events scheduled for this date.
                </p>
              ) : (
                <p className="text-muted-foreground text-center py-8">
                  Click on a date to view events.
                </p>
              )}
            </CardContent>
          </Card>

          {/* Legend */}
          <Card>
            <CardHeader>
              <CardTitle>Event Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {Object.entries(categoryColors).map(([category, color]) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Badge variant="secondary" className={color}>
                      {category}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}