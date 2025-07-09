'use client';
import { ProductsContext } from '@/context';
import { ShoppingCart, User } from 'lucide-react';
import Link from 'next/link';
import React, { useContext } from 'react';

const UserAndCartSection = ({cartItems=[]}) => {
    return (
        <div className="flex items-center space-x-6">
            <Link href="/my-cart" className="relative">
              <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />
              {cartItems?.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-semibold rounded-full px-1.5">
                  {cartItems.length}
                </span>
              )}
            </Link>
            <div className="hidden md:block cursor-pointer">
              <User className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
          </div>
    );
};

export default UserAndCartSection;