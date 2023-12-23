
'use client';
import Link from 'next/link';
import React from 'react';

const TrustBox = () => {
 
  return (
    // <!-- TrustBox widget - Carousel -->
    <div>
        <div className="trustpilot-widget" data-locale="en-US" 
        data-template-id="53aa8912dec7e10d38f59f36" 
        data-businessunit-id="5b3cdead266600000141929b" 
        data-style-height="140px" 
        data-style-width="100%" 
        data-theme="light"
        data-stars="1,2,3,4,5"
        data-review-languages="en"
        data-scroll-to-list="true">
    
    <Link href="https://www.trustpilot.com/review/www.haloflights.co.uk"> Trustpilot </Link>
        </div>
    </div>

    // <!-- End TrustBox widget -->
  );
};

export default TrustBox;
