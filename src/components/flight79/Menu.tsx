import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

type Tab = 'bestseller' | 'coffee' | 'noncoffee' | 'bakery' | 'food';

export default function Menu() {
  const [activeTab, setActiveTab] = useState<Tab>('bestseller');

  const tabs: { id: Tab; label: string }[] = [
    { id: 'bestseller', label: 'Best Seller' },
    { id: 'coffee', label: 'Coffee' },
    { id: 'noncoffee', label: 'Non-Coffee' },
    { id: 'bakery', label: 'Bakery' },
    { id: 'food', label: 'Food' },
  ];

  return (
    <section id="menu" className="py-20 bg-brand-bg">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-brand-text mb-4">In-Flight Menu</h2>
          <p className="text-brand-muted max-w-xl mx-auto">Discover our diverse global selections, from signature coffees to Western, Italian, and Indonesian delicacies.</p>
        </div>
        
        {/* Tabs */}
        <div className="flex justify-center items-center gap-2 sm:gap-4 mb-10 overflow-x-auto hide-scrollbar py-2">
            {tabs.map((tab) => (
                <Button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    variant={activeTab === tab.id ? 'default' : 'outline'}
                    rounded="full"
                    className={activeTab === tab.id ? 'shadow-md' : 'bg-white hover:shadow-md border-gray-200 text-brand-muted'}
                >
                    {tab.label}
                </Button>
            ))}
        </div>

        {/* Content - Bestseller */}
        {activeTab === 'bestseller' && (
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                <MenuItem 
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuC-yR2Z2WohqqK0oHmIrGj_0re98v2tSSEc2UrRX1BAb6O9wcjMYtzaSfkkmQiwOcl6z9OzsGiNwP5gC6A6pUYWUNG5xkk7nKItavl3VvYW4D30owVPrHPlQ9ENGBVyJT7ysAxGTafGuln7-aoeOxGIvYJc3gmziWdHwcGD7UlQrywxFdPKyHAqQW7LTJ1kec5VwdK6ef9zQy0KBw59kGQps0ljQFkZ02t3P2lMEP6FyZaU6LuTtfK5yZjHOU733ee_SR2luOJM2Yy3"
                    title="Pilot's Signature Latte"
                    desc="Our creamy signature palm sugar latte."
                    price="Rp 28.000"
                    badge="Top Pick"
                    badgeVariant="flight-top-pick"
                />
                <MenuItem 
                     image="https://lh3.googleusercontent.com/aida-public/AB6AXuA9ppU51jWVxD6hxagV2vQdoExngtaKNAWDrPfQwOUH_XgHuCtTnlMbkysfDg7tfsMKlT53NtG5taXS1ylcqXE4VP31Ymk5I0ncVaRfH2hw8C_6W_78EzJR3QhEvYk4CplLy47CzWt37sa86FmYkidjNMIQiZqrYvJmUrcu-W89-0xnu742ZvbtcrtDaH1DEMvViZIGNT8BjLZ4n22rJcBi4QOG_HCRtZbIGQBljBhJE3WcpZlsxD268My9NwoXzyXNIkX_Krg2kQ3B"
                    title="Italian Carbonara"
                    desc="Creamy pasta with smoked beef and parmesan."
                    price="Rp 45.000"
                />
                 <MenuItem 
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuDfJXcLDijFtHisy_TvUVGJXopbuWgXyAlbjZbD68P0ezC0TqeNwIb2iYtZ6XiFjngaO5I3isvXqNcFWG57b5M8QRC2ayD3wBnoS9DvtaY3HZIREdnDdOnX9DwjOKTY7E0Qmp0NPHQWu9xgMGF3x-ZGXcY_R9jbap3eQDCf9L7rQH6jLaXMR_n1CkRyWKEYyUCf3dl1WxOvFY4cbbi9hpCHzrzTQLSZcEC-weCi42vM0zsfyDuovoBL7gvSYLBv9MEFyPW5MY3x5qxj"
                    title="Classic Beef Burger"
                    desc="Juicy western style patty with melted cheese."
                    price="Rp 55.000"
                    badge="Chef's Choice"
                    badgeVariant="flight-chef"
                />
                 <MenuItem 
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuCuIo6ssPH_vjZSxAeA5gRm_VPnjCiEmamta3D5xCnazQ1jEWbZy7ePyF9xbcOf7uDMthdxxTDeSQ7nZgIR7XXV7CiDHFHRKBlZFGbThAkuMefq33gq7Kzc6BphO6hyoiI2vtA-rpK6UvDHfgYobPqnSOfxMT4tCCSIi7yWQ-7lV7rgAzkexZunXhCfu6iibfo8-sQcnP5NLmoZeKvgtardYJTEdc2iGAm3YISeR-dDLDje530DWPJUjw4VJyTkvPLv6Rk13JMcdrbm"
                    title="Nasi Goreng Flight 79"
                    desc="Signature Indonesian fried rice with satay."
                    price="Rp 38.000"
                />
                 <MenuItem 
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuBDd3W0htYJ8GlwgnEBKySweBQs6TchkDLxotuuEBN9wQjiy_zLwlTZdujiFPjpTyOEeoUZ3-hFjeBszFHuog50mKO60FY5t9JPeYHb2OOVHya2XdsATzLu1_tO3HgDEVHwRjb8l1tHTIhK5PWsoYJIjrPo9xd4d_dEMCubvmYRIQll5CrYUspfmdNRdxYiHc2lH9irxoXk7JgRkxtDLEmKmCQdiMKLVZUBgy4KDp7YUx8ZIikiM0CEujrVzyIbFJIZcqQXnYxQuq2U"
                    title="Spaghetti Bolognese"
                    desc="Classic Italian pasta with meat sauce."
                    price="Rp 45.000"
                />
                 <MenuItem 
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuCn-ypl2ZmmsJ_sCXiVIOEdgoQFn1CfHmc6Yqzh45hmh8Fbjsf6XbQPJAEmbvp60TFlDBrIecDf0MZZEObwiTzAtusrH6ZZMVKEn9KHWaYyYaYzv-bOqqEBazypkfMSW5CgieRsxolE2tmrJP4_fyWQtNjzJeeEjaPBxTBTc49kBShXQ6yFoolNag9Rm36JmNm0CAB_A-4whuldYvsqkIekc838V97teDi3hHspI1lNt1-YipJc0xyqMFW0dOL4IFKc7vBY-HozUvA8"
                    title="Royal Chocolate"
                    desc="Premium Belgian chocolate, rich and creamy."
                    price="Rp 28.000"
                    badge="Kids"
                    badgeVariant="flight-kids"
                />
                 <MenuItem 
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuAHeKkPY0zBM75SFVDjBFKDLLGotNMKTDfw1IshWcSG0Ijo_4mXwc8wqhaAHERVA6aoJ5ZyRTQK9kzm4RVL41tdg1GBd3cMez6cb3uuMCbpoMtO8UfYkWmr0NEyDAfC5uoJVPDQk05wDiy3jdoBLNFiA5jnTmuYAob8GW7Xpo7UlpUm3yP91eboEalkvMiEXPhAJFa7FJLpxbMmzSJxi5frFGfkVMd4UC7F4m2LzZtuVMnvcc_qZyC9EgG9Wszgwu9FvFfMLT-sGTqI"
                    title="Soft Choco Bread"
                    desc="Soft pillow bread filled with melted chocolate."
                    price="Rp 12.000"
                    badge="Fresh"
                    badgeVariant="flight-fresh"
                />
                 <MenuItem 
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuCg4RlW3KjaEfCUTRp5bQ_Q4UWwciPs_Pga9oQZvBt6xtQ-zG7oEV3UlGzytM1SdES5qlU7Q8BobO0MeXiiY4emyrwGqqcf97mIkzMinkPyUE1rmAJnY77oqr_HOBiJmMFgh3lgqT72x94MHy9oOPHSy08VpAWSC1rQ58CP1RMcZTUO8XGPfUozi_gf8E4uFyRWrPkkiHuyG6SJp1AijftK9szXaVoxXmOC_c9KdtuZ713y-xux5OJMtWXY4lDQQKXemGtvwdvHZ7fE"
                    title="Long Black"
                    desc="Double shot espresso with hot water."
                    price="Rp 22.000"
                />
             </div>
        )}

        {/* Content - Coffee */}
        {activeTab === 'coffee' && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                 <MenuItem 
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuAyrQNSUBAdQettTT4Ej3KJs4cvtc06ju3tvvWq9pa-2cQ6Ho1bevd7GuueyHxSyBIetHoGv46RX_-EybWNWAhtpVdbPU2EgjOJje_bMkqZkcjQNR5jP-AO0tH4JU6Ra-0um-6vOATZHAU17S-4q7znIjTt_O4FQrg0JWm5lClddoRj5pIZyJ6zrXiLNmPkkx1jfTNFvAO37TIlEHfaFoNYr_i0v_xQ9kluVUFnx8kC3POfO9sNUcwhD3lrgfQTUr-So7S4J1lSBKok"
                    title="Long Black"
                    desc="Double shot espresso with hot water."
                    price="Rp 22.000"
                />
                <MenuItem 
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuB0dVWPVyfxijzktVfbSIyF9qlDOInMSwX9i-p0EfIYY7QhcVQahng97q4l0fw4hAElESCqkznQ-RmmmJ0Xmu0qwwqcKkr2KI9jCXRjP-Xcx7ATxtL5N7yfsTfrKodHvnyumaTW8Wcl_Q8yPuuG0-kgn1TCd9Q54o3mMo35eSNeJRerr4AjyczF0C5cQcjsXQpWTWRcv9XaxA0JzyPshBBczMNypBg3Ax8IAPueRo5if4lJoBTiZY32VbNP8ccJ4ujifhps_o8-ilU7"
                    title="Cappuccino"
                    desc="Espresso with steamed milk and thick foam."
                    price="Rp 26.000"
                />
                 <MenuItem 
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuC-yR2Z2WohqqK0oHmIrGj_0re98v2tSSEc2UrRX1BAb6O9wcjMYtzaSfkkmQiwOcl6z9OzsGiNwP5gC6A6pUYWUNG5xkk7nKItavl3VvYW4D30owVPrHPlQ9ENGBVyJT7ysAxGTafGuln7-aoeOxGIvYJc3gmziWdHwcGD7UlQrywxFdPKyHAqQW7LTJ1kec5VwdK6ef9zQy0KBw59kGQps0ljQFkZ02t3P2lMEP6FyZaU6LuTtfK5yZjHOU733ee_SR2luOJM2Yy3"
                    title="Pilot's Signature Latte"
                    desc="Our creamy signature palm sugar latte."
                    price="Rp 28.000"
                    badge="Top Pick"
                    badgeVariant="flight-top-pick"
                />
            </div>
        )}
        
        {/* Content - Other tabs */}
         {activeTab === 'noncoffee' && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                 <MenuItem 
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuAFFuwNxGiOumJdix73NWLBsMJYlRD3koT0qgwURuYbG4l7vt2jekZG-goL2upUDI_e028YePRHWHXZk5RBtNDQ6f7SGdEH38VWanXpSHQRGLnxdJ__8Ae2ebLz4lp3t3fxOzanQ1Lxs7ODMuaGgcYYoebIXAwdcKCcjwOqnSdaalP-bIydPfR7UgZgQbkWFhXxwshbl7cMupnLWsgnIP7L9RsSuVwDzBgLh7Xt3dqSuQ7tOTXNK69S0lKfspqOnwbpLVJyUOeVTfB9"
                    title="Royal Chocolate"
                    desc="Premium Belgian chocolate, rich and creamy."
                    price="Rp 28.000"
                    badge="Kids"
                    badgeVariant="flight-kids"
                />
            </div>
         )}
         
         {activeTab === 'bakery' && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                <MenuItem 
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuCN6BVPTEKqTHkl8p9d1-ywUUPkqF4OGDOVN5_MwXqez8EsOqxyTYvuu5QOz-kF9AEFTuFL2p0fgKaFMD4F0cN5iQvCmA-2gZP3fVJpR3Whhp7NkxW8fmHhwp5k52ZeOGJzsPXrRjkJ2grkny8yQiQDR2xK7G2TVvhHtuIWV1Rmgp0KlyHfQCHr2_bY905unHi5Z2N0D8Xfxcz4lvnrOP9-cQJuI2LPsfzUcJvvSRsPGxmlBlJOIYblAxD3aOf3H9aDlat1JxtrUN5m"
                    title="Soft Choco Bread"
                    desc="Soft pillow bread filled with melted chocolate."
                    price="Rp 12.000"
                    badge="Fresh"
                    badgeVariant="flight-fresh"
                />
            </div>
         )}
         
         {activeTab === 'food' && (
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                <MenuItem 
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuB5bPVouuRW1xyS2ju1MYgUzDaznktIjRHnwN4YYfEy946SOUGCNzrmnyNJ2LGOUseyp2brLirptQfIfztly17jaOcuwWzWLHiC62f3gBLNKBAbSTepwjJ3ErGd5frzpcIGlKLO7zzsvSvCuj8a6h0dKSGzmEV75f2NqGxIh49GnFTEEcHw9Ea7TGc3qdC0rUC8KrIFRLDa-R4u4gFRCAgzu1uDg3g1nspdosz7S_Pq-ktUCmqC6T7L_BtCKu3-A8NdC5SAIC7O8-MV"
                    title="Fish and Chips"
                    desc="Crispy battered fish with french fries."
                    price="Rp 48.000"
                />
                <MenuItem 
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuA6KpQm_TF6i6z29JVwklMB-_BYSi1w21DvETnYgtxTWjxJGB5LgUCVdUcsAuAzuphR8yR0AyNRFRSbPjV5AUDHGDoDqSECw_e8xL3SPuWrtWrnVBrkmHNYQJHK3_x7oCmKI6SAfITHvcizbBqFr09eRpCZwI7xxVXqUe2gu1Ek8IfsamNOve6EA_aXmVJs5iqzulREzHrvCouO4gKOSCFo2qzHPoI0e4tP0ykiZvcsA4a-W9XTVcjn95KTvWpejEUc3Qdw1Cf-Nc1h"
                    title="Ayam Bakar Madu"
                    desc="Grilled chicken with honey glaze and sambal."
                    price="Rp 42.000"
                />
                 <MenuItem 
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuC_RwR6SZV2TN1WTGiCVsPKlVe3hnLhJ5BQKuaD6Eb5rGcCw0jn1P9dV-89TroripRqmK-W6Ccd2M5OsoaeGIdN6nbupbnqxg95T7pR_QIxEX9y4kD1mthV7Os3xCrdmloB9L7_KK4DhOuBMdpKNGckx4RnOp-ibct8e9ACcf9jEwLCAFFlOuyuEl4zIGkyWecYqpjVYol4MkU8mGHRwY698z_Ni1_ds__8PKOs_7PKxnUL4fTuP872o7STQXkDJXuu58oP9Vva5UX5"
                    title="Spaghetti Bolognese"
                    desc="Classic Italian pasta with meat sauce."
                    price="Rp 45.000"
                />
             </div>
         )}
         
         <div className="mt-12 flex flex-col items-center justify-center gap-4 border-t border-gray-200 pt-8">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-muted">In-Flight Delivery</p>
            <div className="flex gap-8 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                <span className="font-black text-xl text-green-600 cursor-pointer">GoFood</span>
                <span className="font-black text-xl text-green-500 cursor-pointer">GrabFood</span>
                <span className="font-black text-xl text-orange-500 cursor-pointer">ShopeeFood</span>
            </div>
        </div>
      </div>
    </section>
  );
}

function MenuItem({ image, title, desc, price, badge, badgeVariant }: { image: string, title: string, desc: string, price: string, badge?: string, badgeVariant?: "default" | "secondary" | "destructive" | "outline" | "flight-top-pick" | "flight-chef" | "flight-kids" | "flight-fresh" }) {
    return (
        <div className="group bg-white rounded-2xl p-4 border border-gray-100 shadow-soft hover:shadow-xl hover:border-brand-primary/20 transition-all duration-300 cursor-pointer flex flex-col h-full">
            <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4 bg-gray-50">
                {badge && (
                    <div className="absolute top-2 left-2 z-10">
                        <Badge variant={badgeVariant || 'default'}>{badge}</Badge>
                    </div>
                )}
                <img alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={image} />
            </div>
            <div className="flex flex-col flex-1">
                <h3 className="font-serif font-bold text-lg text-brand-text mb-1 group-hover:text-brand-primary transition-colors line-clamp-2">{title}</h3>
                <p className="text-xs text-brand-muted mb-3 line-clamp-2">{desc}</p>
                <div className="mt-auto flex items-center justify-between">
                    <span className="font-bold text-brand-primary text-lg">{price}</span>
                    <Button size="icon" variant="secondary" rounded="full" className="w-8 h-8 hover:bg-brand-primary hover:text-white">
                        <span className="material-symbols-outlined text-sm">add</span>
                    </Button>
                </div>
            </div>
        </div>
    );
}
