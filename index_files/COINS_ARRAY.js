//to get logos 100x100 you can using photo-reasizers, like this: http://picasion.com/create-avatar/

//You can comment and uncomment any data in array
	
var crypto_data = [
	//Ethereum
	{"my": true, "compressed": false, "address_byte": 0, "private_key_prefix": 0, "code": "ETH", "name": "Ethereum", "logo": "logos/ethereum-logo_100x100.png"},
	
	//______________________________________________________________________________________________________________________
	//bitcoin-based - altcoins array
	
	//checked by default, priv and addr is compressed?, address_previx_byte, priv_prefix_byte, ticker, name, relative logo-pathway to the folder static\logos\100x100
	
	//to get WIF private keys, beginning from symbols [K,L] - set default bitcoin private_key_prefix as default value 128 (byte 0x80)
	//For example, Vertcoin:
	{"my": true, "compressed": true, "address_byte": 71, "private_key_prefix": 128, "code": "vtc", "name": "Vertcoin", "logo": "logos/vtc-logo_100x100.png"},
	
	//old private key prefix is 199 with W symbol in private key.
	//{"my": true, "compressed": true, "address_byte": 71, "private_key_prefix": 199, "code": "vtc", "name": "Vertcoin", "logo": "logos/vtc-logo_100x100.png"},
	
	//VertCoin with uncompressed keys and addresses
	//{"my": true, "compressed": false, "address_byte": 71, "private_key_prefix": 199, "code": "vtc", "name": "Vertcoin", "logo": "logos/vtc-logo_100x100.png"},
	
	//This is here: https://walletgenerator.net/?currency=Vertcoin
	//but in qt program 'importprivkey PRIV' and 'dumpprivkey ADDRESS' working with compressed private keys
	//and they have [K, L] first symbol. So default bitcoin prefix byte 128 added in previous string. 
	//don't uncomment this string or do this with comment previous...
	
	//use next console commands in your wallet to do comparation priv and address:
	//	dumpprivkey	ADDRESS
	//	importprivkey PRIVATE KEY
	//IF YOU CANN'T IMPORT YOUR PRIVATE KEY, YOU CANN'T PAY FROM ADDRESS THEN.
	//DO NOT ACCEPT PAYMENTS TO INCORRECT ADDRESS, BECAUSE YOU CAN LOST YOUR FUNDS AND COINS.
	
	{"my": false, "compressed": false, "address_byte": 48, "private_key_prefix": 176, "code": "1337", "name": "1337", "logo": "logos/1337-logo_100x100.png"},
	{"my": false, "compressed": false, "address_byte": 23, "private_key_prefix": 151, "code": "aur", "name": "Auroracoin", "logo": "logos/aur-logo_100x100.png"},
	{"my": false, "compressed": false, "address_byte": 85, "private_key_prefix": 213, "code": "bqc", "name": "BBQcoin", "logo": "logos/bqc-logo_100x100.png"},
	{"my": false, "compressed": false, "address_byte": 25, "private_key_prefix": 176, "code": "bvc", "name": "BeaverCoin", "logo": "logos/bvc-logo_100x100.png"},
	{"my": false, "compressed": false, "address_byte": 18, "private_key_prefix": 146, "code": "bcc", "name": "BitConnect", "logo": "logos/bcc-logo_100x100.png"},
	{"my": true, "compressed": false, "address_byte": 0, "private_key_prefix": 128, "code": "btc", "name": "Bitcoin", "logo": "logos/btc-logo_100x100.png"},
	{"my": false, "compressed": false, "address_byte": 0, "private_key_prefix": 128, "code": "bch", "name": "Bitcoin Cash", "logo": "logos/bch-logo_100x100.png"},
	{"my": false, "compressed": false, "address_byte": 25, "private_key_prefix": 153, "code": "blk", "name": "Blackcoin", "logo": "logos/blk-logo_100x100.png"},
	{"my": false, "compressed": false, "address_byte": 26, "private_key_prefix": 154, "code": "bun", "name": "BunnyCoin", "logo": "logos/bun-logo_100x100.png"},
	{"my": false, "compressed": false, "address_byte": 21, "private_key_prefix": 149, "code": "cat", "name": "Catcoin", "logo": "logos/cat-logo_100x100.png"},
	{"my": false, "compressed": false, "address_byte": 27, "private_key_prefix": 155, "code": "cloak", "name": "CloakCoin", "logo": "logos/cloak-logo_100x100.png"},
	{"my": false, "compressed": false, "address_byte": 0, "private_key_prefix": 128, "code": "xcp", "name": "CounterParty", "logo": "logos/xcp-logo_100x100.png"},
	{"my": false, "compressed": false, "address_byte": 28, "private_key_prefix": 156, "code": "cj", "name": "CryptoJacks", "logo": "logos/cj-logo_100x100.png"},
	{"my": false, "compressed": false, "address_byte": 31, "private_key_prefix": 159, "code": "note", "name": "DNotes", "logo": "logos/note-logo_100x100.png"},
	{"my": false, "compressed": false, "address_byte": 76, "private_key_prefix": 204, "code": "dash", "name": "Dash", "logo": "logos/dash-logo_100x100.png"},
	{"my": false, "compressed": false, "address_byte": 90, "private_key_prefix": 218, "code": "dmd", "name": "Diamond", "logo": "logos/dmd-logo_100x100.png"},
	{"my": false, "compressed": false, "address_byte": 30, "private_key_prefix": 128, "code": "dgb", "name": "Digibyte", "logo": "logos/dgb-logo_100x100.png"}, 
	{"my": false, "compressed": false, "address_byte": 30, "private_key_prefix": 158, "code": "dgc", "name": "DigitalCoin", "logo": "logos/dgc-logo_100x100.png"}, 
	{"my": false, "compressed": false, "address_byte": 15, "private_key_prefix": 143, "code": "dime", "name": "Dimecoin", "logo": "logos/dime-logo_100x100.png"}, 
	{"my": true, "compressed": false, "address_byte": 30, "private_key_prefix": 158, "code": "doge", "name": "Dogecoin", "logo": "logos/doge-logo_100x100.png"}, 
	{"my": false, "compressed": false, "address_byte": 33, "private_key_prefix": 128, "code": "emc", "name": "Emercoin", "logo": "logos/emc-logo_100x100.png"}, 
	{"my": false, "compressed": false, "address_byte": 33, "private_key_prefix": 161, "code": "erc", "name": "Europecoin", "logo": "logos/erc-logo_100x100.png"}, 
	{"my": false, "compressed": false, "address_byte": 14, "private_key_prefix": 142, "code": "ftc", "name": "Feathercoin", "logo": "logos/ftc-logo_100x100.png"}, 
	{"my": false, "compressed": false, "address_byte": 33, "private_key_prefix": 161, "code": "tips", "name": "FedoraCoin", "logo": "logos/tips-logo_100x100.png"}, 
	{"my": false, "compressed": false, "address_byte": 35, "private_key_prefix": 163, "code": "flap", "name": "FlappyCoin", "logo": "logos/flap-logo_100x100.png"}, 
	{"my": false, "compressed": false, "address_byte": 36, "private_key_prefix": 164, "code": "fjc", "name": "FujiCoin", "logo": "logos/fjc-logo_100x100.png"}, 
	{"my": false, "compressed": false, "address_byte": 38, "private_key_prefix": 166, "code": "gsm", "name": "GSMcoin", "logo": "logos/gsm-logo_100x100.png"}, 
	{"my": false, "compressed": false, "address_byte": 38, "private_key_prefix": 166, "code": "game", "name": "GameCredits", "logo": "logos/game-logo_100x100.png"}, 
	{"my": false, "compressed": false, "address_byte": 36, "private_key_prefix": 128, "code": "grs", "name": "Groestlcoin", "logo": "logos/grs-logo_100x100.png"}, 
	{"my": false, "compressed": false, "address_byte": 40, "private_key_prefix": 168, "code": "thc", "name": "HempCoin", "logo": "logos/thc-logo_100x100.png"}, 
	{"my": false, "compressed": false, "address_byte": 40, "private_key_prefix": 168, "code": "huc", "name": "HunterCoin", "logo": "logos/huc-logo_100x100.png"}, 
	{"my": false, "compressed": false, "address_byte": 45, "private_key_prefix": 173, "code": "karma", "name": "KarmaCoin", "logo": "logos/karma-logo_100x100.png"}, 
	{"my": false, "compressed": false, "address_byte": 45, "private_key_prefix": 173, "code": "meow", "name": "KittehCoin", "logo": "logos/meow-logo_100x100.png"}, 
	{"my": false, "compressed": false, "address_byte": 18, "private_key_prefix": 144, "code": "leo", "name": "LEOcoin", "logo": "logos/leo-logo_100x100.png"}, 
	{"my": false, "compressed": false, "address_byte": 48, "private_key_prefix": 176, "code": "lemon", "name": "LemonCoin", "logo": "logos/lemon-logo_100x100.png"}, 
	{"my": true, "compressed": false, "address_byte": 48, "private_key_prefix": 176, "code": "ltc", "name": "Litecoin", "logo": "logos/ltc-logo_100x100.png"},
	{"my": false, "compressed": false, "address_byte": 50, "private_key_prefix": 178, "code": "mars", "name": "MarsCoin", "logo": "logos/mars-logo_100x100.png"},
	{"my": false, "compressed": false, "address_byte": 50, "private_key_prefix": 178, "code": "mgc", "name": "MergeCoin", "logo": "logos/mgc-logo_100x100.png"},
	{"my": false, "compressed": false, "address_byte": 3, "private_key_prefix": 131, "code": "moon", "name": "Mooncoin", "logo": "logos/moon-logo_100x100.png"},
	{"my": false, "compressed": false, "address_byte": 50, "private_key_prefix": 178, "code": "xmy", "name": "MyriadCoin", "logo": "logos/xmy-logo_100x100.png"},
	{"my": false, "compressed": false, "address_byte": 52, "private_key_prefix": 128, "code": "nmc", "name": "Namecoin", "logo": "logos/nmc-logo_100x100.png"},
	{"my": false, "compressed": false, "address_byte": 53, "private_key_prefix": 181, "code": "nlc2", "name": "NoLimitCoin", "logo": "logos/nlc2-logo_100x100.png"},
	{"my": false, "compressed": false, "address_byte": 8, "private_key_prefix": 136, "code": "nvc", "name": "Novacoin", "logo": "logos/nvc-logo_100x100.png"},
	{"my": false, "compressed": false, "address_byte": 55, "private_key_prefix": 183, "code": "pnd", "name": "PandaCoin", "logo": "logos/pnd-logo_100x100.png"},
	{"my": false, "compressed": false, "address_byte": 56, "private_key_prefix": 108, "code": "part", "name": "Particl", "logo": "logos/part-logo_100x100.png"},
	{"my": false, "compressed": false, "address_byte": 55, "private_key_prefix": 183, "code": "ppc", "name": "Peercoin", "logo": "logos/ppc-logo_100x100.png"},
	{"my": false, "compressed": false, "address_byte": 47, "private_key_prefix": 175, "code": "ptc", "name": "Pesetacoin", "logo": "logos/ptc-logo_100x100.png"},
	{"my": false, "compressed": false, "address_byte": 30, "private_key_prefix": 212, "code": "pivx", "name": "PivX", "logo": "logos/pivx-logo_100x100.png"},
	{"my": false, "compressed": false, "address_byte": 55, "private_key_prefix": 183, "code": "pot", "name": "PotCoin", "logo": "logos/pot-logo_100x100.png"},
	{"my": false, "compressed": false, "address_byte": 23, "private_key_prefix": 151, "code": "xpm", "name": "Primecoin", "logo": "logos/xpm-logo_100x100.png"},
	{"my": false, "compressed": false, "address_byte": 58, "private_key_prefix": 186, "code": "qrk", "name": "Quark", "logo": "logos/qrk-logo_100x100.png"},
	{"my": false, "compressed": false, "address_byte": 61, "private_key_prefix": 189, "code": "rdd", "name": "Reddcoin", "logo": "logos/rdd-logo_100x100.png"},
	{"my": false, "compressed": true, "address_byte": 0x26, "private_key_prefix": 0xa6, "code": "GEERT", "name": "GeertCoin", "logo": "logos/GEERT-logo_100x100.png"},
	{"my": false, "compressed": true, "address_byte": 0x3f, "private_key_prefix": 0xbf, "code": "XRBC", "name": "ReddByteCoin", "logo": "logos/XRBC-logo_100x100.png"},
	{"my": false, "compressed": false, "address_byte": 0x1a, "private_key_prefix": 0x9a, "code": "SAND", "name": "BeachCoin", "logo": "logos/SAND-logo_100x100.png"},
	{"my": false, "compressed": true, "address_byte": 0x64, "private_key_prefix": 0x17, "code": "BHD", "name": "Bithold", "logo": "logos/BHD-logo_100x100.png"},
	
/*	{"my": false, "compressed": false, "address_byte": 60, "private_key_prefix": 128, "code": "ric", "name": "Riecoin", "logo": "logos/ric-logo_100x100.png"},
	{"my": false, "compressed": false, "address_byte": 60, "private_key_prefix": 188, "code": "rby", "name": "Rubycoin", "logo": "logos/rby-logo_100x100.png"},
	{"my": false, "compressed": false, "address_byte": 63, "private_key_prefix": 191, "code": "song", "name": "SongCoin", "logo": "logos/song-logo_100x100.png"},
	{"my": false, "compressed": false, "address_byte": 0, "private_key_prefix": 128, "code": "sys", "name": "Syscoin 2.1", "logo": "logos/sys-logo_100x100.png"},
	{"my": false, "compressed": false, "address_byte": 65, "private_key_prefix": 193, "code": "tse", "name": "Tattoocoin", "logo": "logos/tse-logo_100x100.png"},
	{"my": false, "compressed": false, "address_byte": 0, "private_key_prefix": 128, "code": "trc", "name": "TerraCoin", "logo": "logos/trc-logo_100x100.png"},
	{"my": false, "compressed": false, "address_byte": 11, "private_key_prefix": 139, "code": "tes", "name": "TeslaCoin", "logo": "logos/tes-logo_100x100.png"},
	{"my": false, "compressed": false, "address_byte": 66, "private_key_prefix": 153, "code": "tx", "name": "TransferCoin", "logo": "logos/tx-logo_100x100.png"},
	{"my": false, "compressed": false, "address_byte": 68, "private_key_prefix": 196, "code": "unify", "name": "Unify", "logo": "logos/unify-logo_100x100.png"},
	{"my": false, "compressed": false, "address_byte": 130, "private_key_prefix": 224, "code": "uno", "name": "Unobtanium", "logo": "logos/uno-logo_100x100.png"},
	{"my": false, "compressed": false, "address_byte": 71, "private_key_prefix": 199, "code": "xvc", "name": "Vcash", "logo": "logos/xvc-logo_100x100.png"},
	{"my": false, "compressed": false, "address_byte": 30, "private_key_prefix": 158, "code": "xvg", "name": "Verge", "logo": "logos/xvg-logo_100x100.png"},
	{"my": true, "compressed": false, "address_byte": 71, "private_key_prefix": 199, "code": "vtc", "name": "Vertcoin", "logo": "logos/vtc-logo_100x100.png"},
	{"my": false, "compressed": false, "address_byte": 7352, "private_key_prefix": 128, "code": "zec", "name": "ZCash", "logo": "logos/zec-logo_100x100.png"},
	{"my": false, "compressed": false, "address_byte": 7352, "private_key_prefix": 128, "code": "zcl", "name": "ZClassic", "logo": "logos/zcl-logo_100x100.png"}
*/	
	
];