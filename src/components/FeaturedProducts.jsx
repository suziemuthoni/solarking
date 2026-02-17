import { useState } from 'react'
import PurchaseForm from './PurchaseForm'
import './FeaturedProducts.css'

function FeaturedProducts() {
  const [showPurchaseForm, setShowPurchaseForm] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

  const products = [
    {
      id: 'powerplay-pro',
      name: 'PowerPlay Pro',
      type: 'Solar Inverter System',
      image: '/images/Powerplay-pro-panel-portrait-1-min-1-min-min-scaled-1.webp',
      description: 'Power your essential home and business appliances via solar, grid electricity, and battery storage – affordable and portable with a simple plug-and-play installation.',
      subtext: 'Cheaper than running a generator, PowerPlay Pro is an affordable energy solution for those living with unreliable grid connections or entirely off-grid.',
      benefits: [
        { icon: '⚡', title: '600 W inverter, providing power for essential appliances' },
        { icon: '🔋', title: '800 Wh LFP battery built to last a decade' },
        { icon: '🔌', title: 'USB-A and USB-C ports for charging phones, laptops, and other devices' },
        { icon: '💰', title: 'Cheaper and safer than running a generator' },
        { icon: '⚡', title: 'Rapid charging, capable of reaching full charge in as little as two hours' },
        { icon: '🔧', title: 'Plug-and-play design for maximum ease of use' }
      ],
      specs: {
        inverter: [
          'Pure-sine-wave 600 W power output',
          'Grid bypass feature and battery charge integrated',
          'Dimensions: 732 x 454 x 326 mm'
        ],
        battery: [
          '22.4 V, 800 Wh lithium ferro-phosphate (LFP) battery',
          '4 x USB-A (40 W Max Total)',
          '1 x USB-C (65 W Max)'
        ],
        solar: [
          '1 x 450 W monocrystalline roof-mountable solar panels',
          'Dimensions: 1908 x 1134 x 35 mm'
        ]
      }
    },
    {
      id: 'powerhub',
      name: 'PowerHub',
      type: 'Solar Inverter System',
      image: '/images/PowerHub-3300-Panel-scaled-1-800x457.webp',
      description: 'Power your lights and standard electrical appliances with Sun King\'s PowerHub solar inverter and energy storage systems for modern homes and businesses.',
      subtext: 'Customised to your needs and fully-integrated into your electricity distribution system to keep you powered at night, during outages, and when you want to go off-grid.',
      benefits: [
        { icon: '⚡', title: 'Up to 30 kW of inverter power' },
        { icon: '🔋', title: '10-year battery life' },
        { icon: '🛡️', title: 'Comprehensive protection against power outages' },
        { icon: '💰', title: 'Reduce the impact of rising energy prices' },
        { icon: '📈', title: 'Easily expandable post-purchase' },
        { icon: '🔧', title: 'Professional installation and after-sales support included' }
      ],
      specs: {
        core: {
          inverter: '2 kW AC output',
          battery: '2.5 kWh Lithium-ion LFP battery',
          solar: '1.8 kWp – 2.7 kWp'
        },
        plus: {
          inverter: '3.3 kW AC output',
          battery: '5 kWh Lithium-ion LFP battery',
          solar: '1.8 kWp – 3.6 kWp'
        }
      }
    },
    {
      id: 'boom',
      name: 'Boom',
      type: 'Solar Lantern',
      image: 'https://ke.sunking.com/wp-content/uploads/2025/09/Boom-scaled-1.png',
      description: 'The Boom solar lantern combines bright 250-lumen lighting, versatile audio, and efficient phone charging in a compact, user-friendly design.',
      subtext: 'With a 90% more powerful solar panel, 53% larger battery, and 56% brighter light than the original Boom, enjoy superior performance.',
      benefits: [
        { icon: '⏱️', title: 'Up to 50 hours of runtime', description: 'Single charge provides extended use' },
        { icon: '💡', title: '250 lumens on Turbo mode', description: '25 times brighter than a kerosene lamp' },
        { icon: '📻', title: 'Bluetooth, FM radio, MP3 player', description: 'Faster mobile device charging' }
      ],
      specs: {
        lighting: [
          'White LED with three lighting modes',
          '250 lumens brightness on max setting'
        ],
        battery: [
          '14.7 Wh, lithium iron-phosphate (LFP)',
          'Up to 50 hours of runtime on low-power mode'
        ],
        audio: [
          'Bluetooth 5.4 for audio connectivity',
          'FM radio with 87.5 MHz – 108 MHz frequency range'
        ]
      }
    }
  ]

  const handleOrderClick = (product) => {
    setSelectedProduct(product.name)
    setShowPurchaseForm(true)
  }

  return (
    <>
      <section id="featured-products" className="featured-products">
        <div className="container">
          <h2>Our Featured Products</h2>
          <p className="section-subtitle">Discover our range of solar-powered solutions</p>

          <div className="products-list">
            {products.map((product) => (
              <div key={product.id} className="featured-product">
                <div className="product-content">
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                  </div>

                  <div className="product-details">
                    <div className="product-badge">{product.type}</div>
                    <h3>{product.name}</h3>
                    <p className="product-desc">{product.description}</p>
                    <p className="product-subdesc">{product.subtext}</p>

                    <div className="benefits-grid">
                      {product.benefits.slice(0, 3).map((benefit, index) => (
                        <div key={index} className="benefit-item">
                          <div className="benefit-icon">{benefit.icon}</div>
                          <div className="benefit-title">{benefit.title}</div>
                          {benefit.description && <small>{benefit.description}</small>}
                        </div>
                      ))}
                    </div>

                    {product.benefits.length > 3 && (
                      <div className="benefits-grid">
                        {product.benefits.slice(3).map((benefit, index) => (
                          <div key={index + 3} className="benefit-item">
                            <div className="benefit-icon">{benefit.icon}</div>
                            <div className="benefit-title">{benefit.title}</div>
                            {benefit.description && <small>{benefit.description}</small>}
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="product-action">
                      <button 
                        className="btn btn-large"
                        onClick={() => handleOrderClick(product)}
                      >
                        Get {product.name}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Specifications */}
                <div className="product-specs">
                  <h4>Key Specifications</h4>
                  <div className="specs-columns">
                    {product.specs && Object.entries(product.specs).map(([key, specs]) => (
                      <div key={key} className="spec-column">
                        <h5>{key.charAt(0).toUpperCase() + key.slice(1)}</h5>
                        {Array.isArray(specs) ? (
                          <ul>
                            {specs.map((spec, index) => (
                              <li key={index}>{spec}</li>
                            ))}
                          </ul>
                        ) : (
                          <ul>
                            {Object.entries(specs).map(([label, value]) => (
                              <li key={label}><strong>{label}:</strong> {value}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PurchaseForm 
        productName={selectedProduct || 'Product'}
        isOpen={showPurchaseForm}
        onClose={() => setShowPurchaseForm(false)}
      />
    </>
  )
}

export default FeaturedProducts
