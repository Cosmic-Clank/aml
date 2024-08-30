import random
for i in range(69):
    print(f'''
                    {{
		img: `/images/gallery/{i}.jpg`,
		title: "Gallery Image",
		rows: {random.randint(1, 2)}, 
		cols: {random.randint(1, 2)},
	}},
 ''')
