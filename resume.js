google.charts.load('current', {'packages':['corechart', "timeline"]});
google.charts.setOnLoadCallback(drawHSBCChart);
      function drawHSBCChart() {

        var data = google.visualization.arrayToDataTable([
          ['Cool Thing', 'Level of Coolness'],
          ['Enhancements for Customer communications (Email/SMS) and content management services using Spring Integration',     1],
          ['Automated task to save 2000+ hours (LSS Greenbelt Certified).',      4],
          ['Federated search using Elasticsearch, logstash and Kibana. ',  3],
          ['Java based Task tacking application for resource utilization metrics.', 3],
          ['Performance testing and Hardware Scalability calculator combo. ',    3],
          ['Proof of concepts for AEM, Jira, Github, AWS, Jenkins and Mulesoft.  ',    2]
        ]);

        var options = {
            title: 'Coolness distributed over key achievements',
            backgroundColor: { fill:'transparent' },
            legendTextStyle: { color: '#FFF' },
            titleTextStyle: { color: '#FFF' }
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart_HSBC'));

        chart.draw(data, options);
      }

google.charts.setOnLoadCallback(drawZuariChart);

function drawZuariChart() {

        var data = google.visualization.arrayToDataTable([
          ['Cool Thing', 'Level of Coolness'],
          ['Developed Python code to monitor sales orders processing and provide timely alerts for certain thresholds.',     4],
          ['Designed ABAP code to export data as PDF and PHP to make the remote calls to this code via SAP Remote Function Calls.',      4],
          ['Gained valuable insight into the functioning of a data center. ',  2],
          ['Designed a rudimentary website of the Company Health Center. ', 2]
        ]);

        var options = {
            title: 'Coolness distributed over key achievements',
            backgroundColor: { fill:'transparent' },
            legendTextStyle: { color: '#FFF' },
            titleTextStyle: { color: '#FFF' }
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart_Zuari'));

        chart.draw(data, options);
      }


/*google.charts.setOnLoadCallback(drawSkillChart);
      function drawSkillChart() {
        var data = google.visualization.arrayToDataTable([
         ['Technology', 'Proficiency', { role: 'style' }],
         ['C', 8, 'color:yellow;'], 
         ['C++', 9, 'color:green'], 
         ['Java SE', 10, 'color:red'],
         ['Java EE (Spring Integration / Struts / Hibernate)', 10, 'color: red' ],
         ['Python', 9, 'color: red' ],
         ['HTML/CSS',8,'color:red'],
        ['XSL',9,'color:red'],
            ['PHP',8,'color:red'],
            ['JQuery',7,'color:red'],
            ['JavaScript (MEAN Stack)',9,'color:red'],
            ['PLSQL',7,'color:red'],
            ['ABAP',6,'color:red'],
            ['Ruby on Rails',7,'color:red'],
            ['Bash',9,'color:red']
      ]);
          
          
          

        var options = {
          backgroundColor: { color: 'transparent' },
          chart: {
            title: 'My Skills',
            subtitle: 'Skill levels',
          },
          
        };

        var chart = new google.charts.Bar(document.getElementById('my_skills'));
        chart.draw(data, options);
      }
   */

google.charts.setOnLoadCallback(drawSkillChart);
    function drawSkillChart() {
      var data = google.visualization.arrayToDataTable([
        ["Technology", "Proficiency", { role: "style" } ],
        ['JQuery',7,'color:light blue'],
        ['ABAP',7,'color:light blue'],
        ['Ruby on Rails',8,'color:yellow'],
        ['PHP',8,'color:yellow'],
        ['PLSQL',8,'color:yellow'],
        ['XSL',8,'color:yellow'],
        ['Python', 9, 'color: purple' ],
        ['HTML/CSS',9,'color:purple'],
        ['JavaScript (MEAN Stack)',9,'color:purple'],
        ['Bash',9,'color:purple'],
        ['C', 9, 'color: purple'], 
        ['C++', 10, 'color: green'], 
        ['Java SE', 10, 'color:green'],
        ['Java EE', 10, 'color: green' ]
      ]);


      var options = {
        title: "My Skills",
        backgroundColor: { fill:'transparent' },
        /*bar: {groupWidth: "95%"},*/
        legend: { position: "none" },
          titleTextStyle: { color: '#FFF' },
        /*bars: 'vertical';*/
          vAxis: { gridlines: { count: 5 },
                   ticks: [{v:10, f:"World Class"},{v:9, f:"Expert"},{v:8, f:"Pro"},{v:7, f:"Semi-Pro"},{v:6, f:"Newbie"}],
                   textStyle:{color: '#FFF'}
                 },
          hAxis: {
                    textStyle:{color: '#FFF'}
                }
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("my_skills"));
      chart.draw(data, options);
  }
 




/*Timeline for Awards*/
google.charts.setOnLoadCallback(drawAwardChart);
  function drawAwardChart() {
     
    var container = document.getElementById("awards");
    var chart = new google.visualization.Timeline(container);
    var dataTable = new google.visualization.DataTable();
    
    dataTable.addColumn({ type: 'string', id: 'Position' });
    dataTable.addColumn({ type: 'string', id: 'Name' });
    dataTable.addColumn({ type: 'string', role: 'tooltip' });
    dataTable.addColumn({ type: 'date', id: 'Start' });
    dataTable.addColumn({ type: 'date', id: 'End' });
    //dataTable.addColumn({type: 'string', id: 'Description'})
    dataTable.addRows([
      [ 'Award', 'Above and Beyond','Won the ‘Above and Beyond Award’ for performance at work that exceeded expectations and objectives laid out by management at HSBC in 2016.', new Date(2016, 6, 1), new Date(2016, 10, 1) ],
      [ 'Award', 'PEARL','Won the PEARL (Persistent Extraordinary Approachable Resilient and Liable) Award during the first 6 months of working at HSBC Software development for excellence at workplace in terms of innovation at HSBC in 2015.', new Date(2015, 3, 1), new Date(2015, 6, 30) ],
      [ 'Award', 'Rising Star','Nominated for ‘Rising Star Award’ given to stellar performance from an employee with less than 5 years of experience at a country level at HSBC in 2016.', new Date(2015, 12, 1), new Date(2016, 1, 31) ],
      [ 'Award', 'Best Project','Won the Best Project award and ranked First for in-house HSBC training on HTML5, CSS3, Javascript with frameworks like DOJO and Java (SE and EE) with frameworks like Spring, Struts and Hibernate.', new Date(2014, 8, 18), new Date(2014, 9, 30)],
      [ 'Award', 'HSBC Training Batch Topper','Won the Best Project award and ranked First for in-house HSBC training on HTML5, CSS3, Javascript with frameworks like DOJO and Java (SE and EE) with frameworks like Spring, Struts and Hibernate.', new Date(2014, 8, 18), new Date(2014, 9, 30)],
      [ 'Award', 'India Rank 8 IEEEXtreme','All India Ranked 8th for IEEE Xtreme 7 – A 24-hour hackathon held internationally', new Date(2013, 8, 1), new Date(2013, 8, 31)],
      [ 'Award', 'Appsprint Champion','Ranked First in “Appsprint”, an application building competition by building “Decisionator”- an Android application that helps making decisions. (19 -21 April 2012)', new Date(2012, 4, 19), new Date(2013, 4, 21)],
      ['Award','Code it Like Jobs champion','Ranked First in “Code it like Jobs” conducted by the Electronics and Telecommunication Department (2011, 2012 and 2013) of Goa College of Engineering', new Date(2011, 2, 16), new Date(2013,2,18)],
      ['Award','Code Relay','Ranked First in “Code Relay” by Computer Engineering Department (2012 and 2014) of Goa College of Engineering', new Date(2012, 2, 16), new Date(2012,8,18)],
      ['Award','Code Relay','Ranked First in “Code Relay” by Computer Engineering Department (2012 and 2014) of Goa College of Engineering', new Date(2013, 8, 16), new Date(2014,2,16)],
      ['Award','Code Masters',"Ranked First in 'Code Masters' by the Information technology department (2010, 2011 and 2014) of Goa College of Engineering", new Date(2010, 2, 16), new Date(2011,2,18)],
    ]);

     var options = {
      timeline: { 
                groupByRowLabel: true,
                rowLabelStyle: {fontName: 'Segoe UI', fontSize: 24, color:'white'}, 
                barLabelStyle: { fontName: 'Segoe UI', fontSize: 14 }
                },
     tooltip: { isHtml: true },
     backgroundColor: '#323536'
    }; 
      
    chart.draw(dataTable,options);
  }


 
google.charts.setOnLoadCallback(drawExtraChart);
  function drawExtraChart() {
     
    var container = document.getElementById("extra");
    var chart = new google.visualization.Timeline(container);
    var dataTable = new google.visualization.DataTable();
    
    dataTable.addColumn({ type: 'string', id: 'Position' });
    dataTable.addColumn({ type: 'string', id: 'Name' });
    dataTable.addColumn({ type: 'string', role: 'tooltip' });
    dataTable.addColumn({ type: 'date', id: 'Start' });
    dataTable.addColumn({ type: 'date', id: 'End' });
    //dataTable.addColumn({type: 'string', id: 'Description'})
    dataTable.addRows([
      [ 'Extra Curricular Achievement', 'President - Linux User Group','Headed the Linux User Group of the college which went on to create EngicOS, a Linux based operating System indigenous to Goa College of Engineering for the students and professors alike.', new Date(2011, 6, 1), new Date(2013, 6, 1) ],
      [ 'Extra Curricular Achievement', 'Member of IEEE and CSI','•	Member of the Computer Society of India and for the Goa Chapter of IEEE (2012-13).', new Date(2012, 1, 1), new Date(2013, 12, 31) ],
      [ 'Extra Curricular Achievement', 'PyCon2012','Attended PyCon2012 (a convention for Python coders in India) held in Bangalore.', new Date(2012, 6, 1), new Date(2012, 9, 30) ],
      [ 'Extra Curricular Achievement', 'Ethical Hacking Workshop','Workshop on Ethical Hacking and Information Security', new Date(2010, 3, 18), new Date(2010, 9, 30)],
      [ 'Extra Curricular Achievement', 'Arduino workshop','Attended Arduino workshop ', new Date(2011, 3, 18), new Date(2011, 9, 30)],
      [ 'Extra Curricular Achievement', 'Maya Workshop','Attended workshop on Animation using Autodesk Maya', new Date(2013, 3, 1), new Date(2013, 7, 31)],
      [ 'Extra Curricular Achievement', 'Gen Secretary of CURSOR','General Secretary of the Computer Engineering Students Organization (CURSOR) for the Computer Engineering department of Goa College of Engineering. Successfully organized the Technical Festival Technix 7 during this tenure (2012-13).', new Date(2012, 6, 19), new Date(2013, 7, 21)],
      ['Extra Curricular Achievement','President - Photography Club','Headed the Goa College of Engineering photography club for 2012-13.', new Date(2012, 7, 16), new Date(2013,2,18)],
      ['Extra Curricular Achievement',"Students' Parliament Debate" ,'Represented college in “Student Parliament” debate competition held by Goa Legislative assembly in the Secretariat of the state', new Date(2013, 9, 16), new Date(2014,3,18)],
      ['Extra Curricular Achievement',"Intercollege debate","Ranked first in Debate competition at inter-department level event 'Tandav'", new Date(2013, 6, 16), new Date(2013,9,16)],
      ['Extra Curricular Achievement','Photoflare',"Organized an international photography festival in Goa by the name of 'Photoflare'", new Date(2010, 2, 16), new Date(2011,2,18)],
    ]);

     var options = {
      timeline: { 
                groupByRowLabel: true,
                rowLabelStyle: {fontName: 'Segoe UI', fontSize: 24, color:'white'}, 
                barLabelStyle: { fontName: 'Segoe UI', fontSize: 14 }
                },
     tooltip: { isHtml: true },
     backgroundColor: '#323536'
    }; 
      
    chart.draw(dataTable,options);
  }