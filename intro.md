# Figure 3

![](JAMA.png)

```bash
jama/
├── _build/
│   └── html/
│       ├── webApp/ (post_build.sh)
│       │   ├── assets/
│       │   │   └── js/
│       │   │       └── script.js
│       │   ├── styles/
│       │   │   └── style.css
│       │   ├── risk.html
│       │   └── README.md
│       │    
│       ├── chapter1.html
│       ├── chapter2.html
│       │       .
│       │       .
│       │       .
│       ├── chapter8.html
│       ├── index.html
│       ├── intro.html
│       └── README.html
│       
│       
│       
├── _config.yml
├── _toc.yml
├── chapter1.ipynb
├── chapter2.ipynb         
│       .  
│       .       
│       .
├── chapter8.md
├── intro.md
├── README.md
└── requirements.txts
```


```bash
# like/pre_build.sh && jb build like && like/post_build.sh && new/jbb_https.sh
git clone https://github.com/abikesa/workflow && mv workflow new && new/setup_myenv.sh && source myenv/bin/activate 
```

```{tableofcontents}
```
