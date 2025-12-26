import type { IMenu } from "@/interfaces/menus.interface";

export const menus: IMenu[] = [
	{
		title: "Nasi Goreng Flight 79",
		desc: "Signature Indonesian fried rice with satay.",
		image:
			"https://lh3.googleusercontent.com/aida-public/AB6AXuCuIo6ssPH_vjZSxAeA5gRm_VPnjCiEmamta3D5xCnazQ1jEWbZy7ePyF9xbcOf7uDMthdxxTDeSQ7nZgIR7XXV7CiDHFHRKBlZFGbThAkuMefq33gq7Kzc6BphO6hyoiI2vtA-rpK6UvDHfgYobPqnSOfxMT4tCCSIi7yWQ-7lV7rgAzkexZunXhCfu6iibfo8-sQcnP5NLmoZeKvgtardYJTEdc2iGAm3YISeR-dDLDje530DWPJUjw4VJyTkvPLv6Rk13JMcdrbm",
		price: "Rp 25.000",
		category: ["bestseller", "indonesiandelight"],
		badge: {
			name: "Bestseller",
			variant: "bestseller",
		},
	},
];
