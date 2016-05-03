import json
import test_client
import time


with open('test.json') as data_file:    
    data = json.load(data_file)

#print data['objs'][0]['host']


urls = []
for obj in data['objs']:
	host = obj['host']
	path = obj['path']
	#print (host, path)
	url = 'https://' + host + path
	urls.append(url)

f = open('plt_log','r+')
plt = []
for i in range(50):
	tic = time.time()
	test_client.send_req(urls)
	toc = time.time()
	elapsed = toc - tic
	plt.append(elapsed)
	print (elapsed)
	f.write(str(elapsed)+'\n')
f.close()

