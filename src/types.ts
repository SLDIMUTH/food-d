export interface MenuItem {
  id: string;
  name: string;
  sinhalaName?: string;
  category: 'skewers' | 'steaks' | 'platters' | 'seafood' | 'sides' | 'drinks';
  description: string;
  price: number;
  image: string;
  rating: number;
  reviewCount: number;
  isChefSpecial?: boolean;
  isBestseller?: boolean;
  spicyLevel?: 0 | 1 | 2 | 3;
  prepTime: string;
  calories?: number;
  tags: string[];
  options?: {
    doneness?: string[];
    spiciness?: string[];
    sides?: string[];
  };
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  selectedDoneness?: string;
  selectedSpiciness?: string;
  selectedSide?: string;
  specialInstructions?: string;
}

export interface TableReservation {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  guests: number;
  date: string;
  timeSlot: string;
  seatingArea: 'hearth' | 'patio' | 'chef_counter';
  occasion?: string;
  specialRequests?: string;
  status: 'confirmed' | 'pending';
  createdAt: string;
}

export interface Review {
  id: string;
  author: string;
  role: string;
  rating: number;
  date: string;
  comment: string;
  dishRecommended: string;
  avatar: string;
}
