# CBC-Agent Knowledge Base

This directory contains the comprehensive knowledge base for the Coral Beach & Tennis Club (CBC) chatbot agent. The information is organized across multiple formats to provide the CBC-Agent with detailed, accurate information about all aspects of the club.

## Knowledge Base Structure

### Core Information Files

- **`core-facts.md`** - Essential club facts, brand identity, and overview
- **`heritage-identity.md`** - Club history, philosophy, traditions, and cultural significance

### Facilities & Services

- **`accommodations.json`** - Complete lodging information (cottages, suites, rooms)
- **`dining.md`** - All dining venues, specialties, and culinary experiences  
- **`sports-fitness.csv`** - Sports facilities, equipment, and instruction details
- **`hotel-services.md`** - Concierge, housekeeping, spa, and guest services

### Activities & Experiences

- **`activities.md`** - Beach activities, social events, wellness programs, excursions
- **`weddings-events.json`** - Wedding venues, event planning, corporate services

### Location & Travel

- **`bermuda-guide.md`** - Bermuda basics, climate, culture, and transportation
- **`reciprocal-clubs.csv`** - Global network of reciprocal club partnerships

### Guest Support

- **`faqs.json`** - Comprehensive frequently asked questions organized by category

## Usage Guidelines for CBC-Agent

### Context Awareness
The CBC-Agent should use page context to provide relevant information:
- `/stay` pages → Focus on accommodations and hotel services
- `/dine` pages → Emphasize dining venues and culinary experiences  
- `/play` pages → Highlight sports, fitness, and activities
- `/gather` pages → Concentrate on weddings, events, and venues
- `/membership` pages → Discuss membership benefits and reciprocal clubs

### Information Sources
- **Markdown files (.md)** → Detailed narrative information
- **JSON files (.json)** → Structured data for specific topics
- **CSV files (.csv)** → Tabular data for facilities, clubs, and services

### Response Guidelines
1. **Accuracy** - All information is current and verified
2. **Bermudian Hospitality** - Maintain warm, welcoming tone
3. **Specificity** - Provide detailed, actionable information
4. **Cultural Sensitivity** - Respect both local and international perspectives
5. **Service Excellence** - Anticipate needs and offer comprehensive assistance

### Key Topics Covered

#### Accommodations
- Room types and features
- Booking policies and procedures
- Amenities and services
- Capacity and suitability

#### Dining
- Venue descriptions and atmospheres
- Menu styles and specialties
- Dress codes and reservation policies
- Special events and experiences

#### Activities
- Beach and water sports
- Social and cultural events
- Family and children's programs
- Island excursions and tours

#### Facilities
- Sports and fitness equipment
- Spa and wellness services
- Business and meeting facilities
- Transportation and logistics

#### Location
- Bermuda geography and culture
- Transportation options
- Weather and seasonal information
- Local attractions and customs

#### Events & Weddings
- Venue capacities and features
- Planning and coordination services
- Catering and technical support
- Seasonal considerations

#### Membership
- Reciprocal club access
- Member benefits and privileges
- Guest policies and procedures
- Club traditions and customs

## Data Accuracy
All information in this knowledge base has been compiled from official CBC sources and is regularly updated to ensure accuracy. The CBC-Agent should present this information with confidence while encouraging guests to contact the concierge for real-time availability and specific arrangements.

## Integration Notes
This knowledge base is designed to work seamlessly with the CBC website's context-aware chatbot system, providing intelligent, relevant responses based on the user's current page and expressed interests.