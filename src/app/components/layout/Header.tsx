import React from "react";
import { Menu, ShoppingBag, User } from "lucide-react";
import { useState } from "react";
 import { Link } from "react-router-dom";
 import { motion } from "motion/react";
 import { useIsMobile } from "../ui/use-mobile";
 import { cn } from "../ui/utils";
 import { Button } from "../ui/button";
 import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from "../ui/sheet";
 import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../ui/dialog";
 import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
 import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
 import { Input } from "../ui/input";
 import { Label } from "../ui/label";
 import { Checkbox } from "../ui/checkbox";
 import { useSidebar } from "../ui/sidebar";
 import { Search } from "lucide-react";
 import { X } from "lucide-react";
 import { XIcon } from "lucide-react";
 import { XCircleIcon } from "lucide-react";
 

  

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
     
                <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
                  <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                      <h1
                        className="text-2xl tracking-tight text-gray-900"
                        style={{
                          fontFamily: "Playfair Display, serif",
                        }}
                      >
                        Anaya
                      </h1>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-10">
                      <a
                        href="#collections"
                        className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
                      >
                        Collections
                      </a>
                      <a
                        href="#bestsellers"
                        className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
                      >
                        Best Sellers
                      </a>
                      <a
                        href="#video"
                        className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
                      >
                        Experience
                      </a>
                      <a
                        href="#story"
                        className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
                      >
                        Our Story
                      </a>
                    </nav>

                    {/* Right Icons */}
                    <div className="flex items-center gap-6">
                      <button className="hidden lg:block text-gray-700 hover:text-gray-900 transition-colors">
                        <User className="w-5 h-5" />
                      </button>
                      <button className="text-gray-700 hover:text-gray-900 transition-colors relative">
                        <ShoppingBag className="w-5 h-5" />
                        <span className="absolute -top-1 -right-1 bg-[#C9A96E] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                          0
                        </span>
                      </button>
                      <button
                        className="lg:hidden text-gray-700"
                        onClick={() =>
                          setMobileMenuOpen(!mobileMenuOpen)
                        }
                      >
                        <Menu className="w-6 h-6" />
                      </button>
                    </div>
                  </div>

                  {/* Mobile Menu */}
                  {mobileMenuOpen && (
                    <nav className="lg:hidden py-6 space-y-4 border-t border-gray-100">
                      <a
                        href="#collections"
                        className="block text-sm text-gray-700 hover:text-gray-900"
                      >
                        Collections
                      </a>
                      <a
                        href="#bestsellers"
                        className="block text-sm text-gray-700 hover:text-gray-900"
                      >
                        Best Sellers
                      </a>
                      <a
                        href="#video"
                        className="block text-sm text-gray-700 hover:text-gray-900"
                      >
                        Experience
                      </a>
                      <a
                        href="#story"
                        className="block text-sm text-gray-700 hover:text-gray-900"
                      >
                        Our Story
                      </a>
                      <a
                        href="#account"
                        className="block text-sm text-gray-700 hover:text-gray-900"
                      >
                        My Account
                      </a>
                    </nav>
                  )}
                </div>
              
    );
  }