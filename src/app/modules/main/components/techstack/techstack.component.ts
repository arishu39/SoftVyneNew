import { Component, OnInit } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
} from '@angular/animations';

interface TechTab {
  id: string;
  title: string;
  isActive: boolean;
}

interface TechCategory {
  heading: string;
  icons: TechIcon[];
}

interface TechIcon {
  src: string;
  alt: string;
  width?: string;
}

@Component({
  selector: 'app-techstack',
  templateUrl: './techstack.component.html',
  styleUrl: './techstack.component.scss',
  standalone: false,
  animations: [
    trigger('staggerAnimation', [
      transition('* => *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(30px)' }),
            stagger(100, [
              animate(
                '0.6s cubic-bezier(0.35, 0, 0.25, 1)',
                style({ opacity: 1, transform: 'translateY(0)' })
              ),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]),
    trigger('cardAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate(
          '0.5s cubic-bezier(0.35, 0, 0.25, 1)',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
  ],
})
export class TechstackComponent implements OnInit {
  tabs: TechTab[] = [
    {
      id: 'machine-learning',
      title: 'Next-Gen AI & Cognitive Technologies',
      isActive: true,
    },
    { id: 'web', title: 'Modern App & Integration Solutions', isActive: false },
    { id: 'cloud', title: 'Cloud, DevOps & Automation', isActive: false },
    {
      id: 'relational-databases',
      title: 'Data Engineering & Analytics',
      isActive: false,
    },
  ];

  techContent: Record<string, TechCategory[]> = {
    'machine-learning': [
      {
        heading: 'Driving impact with next-gen AI and cognitive solutions.',
        icons: [
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
            alt: 'TensorFlow',
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
            alt: 'PyTorch',
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg',
            alt: 'scikit-learn',
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg',
            alt: 'Keras',
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg',
            alt: 'MLlib',
          },
          {
            src: 'assets/techstack/open_ai_150_60.png',
            alt: 'OpenAI',
            width: '150px',
          },
          {
            src: 'assets/techstack/anthropic_150_60.png',
            alt: 'Anthropic',
            width: '150px',
          },
          {
            src: 'assets/techstack/perplexity_180x60.png',
            alt: 'Perplexity',
            width: '180px',
          },
          {
            src: 'assets/techstack/gemini_90_60.png',
            alt: 'Google Gemini',
            width: '90px',
          },
          {
            src: 'assets/techstack/deepseek_150_60.png',
            alt: 'Deepseek',
            width: '150px',
          },
          {
            src: 'assets/techstack/amazonq_120_60.png',
            alt: 'AWS AI',
            width: '120px',
          },
          {
            src: 'assets/techstack/vertex_ai_120_60.png',
            alt: 'AWS AI',
            width: '120px',
          },
          {
            src: 'assets/techstack/hugging_face.png',
            alt: 'AWS AI',
            width: '160px',
          },
        ],
      },
    ],
    web: [
      {
        heading: 'Backend Services and API Integration',
        icons: [
          { src: 'assets/techstack/RubyRails.png', alt: 'Ruby on Rails' },
          { src: 'assets/techstack/NET.png', alt: '.NET' },
          { src: 'assets/techstack/NETcore.png', alt: '.NET Core' },
          { src: 'assets/techstack/Node.js.png', alt: 'NodeJS' },
          { src: 'assets/techstack/Python.png', alt: 'Python' },
          { src: 'assets/techstack/Java.png', alt: 'JAVA' },
          { src: 'assets/techstack/Go.png', alt: 'Go' },
          { src: 'assets/techstack/PHP.png', alt: 'PHP' },
          { src: 'assets/techstack/Laravel.png', alt: 'Laravel' },
        ],
      },
      {
        heading: 'Web Frontend and UI',
        icons: [
          { src: 'assets/techstack/Angular.png', alt: 'Angular' },
          { src: 'assets/techstack/React.png', alt: 'React' },
          { src: 'assets/techstack/Vue.js.png', alt: 'Veu.js' },
          { src: 'assets/techstack/JavaScript.png', alt: 'JavaScript' },
          { src: 'assets/techstack/HTML5.png', alt: 'HTML5' },
          { src: 'assets/techstack/TypeScript.png', alt: 'TypeScript' },
        ],
      },
      {
        heading: 'Mobile Apps and Experiences',
        icons: [
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
            alt: 'React',
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg',
            alt: 'Flutter',
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg',
            alt: 'Apple',
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-plain.svg',
            alt: 'Android',
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xamarin/xamarin-original.svg',
            alt: 'Xamarin',
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg',
            alt: 'Firebase',
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ionic/ionic-original.svg',
            alt: 'Ionic',
          },
        ],
      },
    ],
    cloud: [
      {
        heading:
          'Accelerating Innovation with Cloud-Powered DevOps & Automation',
        icons: [
          {
            src: 'assets/techstack/Amazon_Web_Services_Logo.svg.png',
            alt: 'AWS',
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
            alt: 'Azure',
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
            alt: 'Google Cloud',
          },
          {
            src: 'assets/techstack/ibm_cloud_120_60.png',
            alt: 'IBM Cloud',
            width: '120px',
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg',
            alt: 'Oracle Cloud',
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
            alt: 'Docker',
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg',
            alt: 'Kubernetes',
          },
          { src: 'assets/techstack/openshift.svg', alt: 'OpenShift' },
          {
            src: 'assets/techstack/mesos_logo.png',
            alt: 'MESOS',
            width: '150px',
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg',
            alt: 'Selenium',
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
            alt: 'Jenkins',
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg',
            alt: 'Ansible',
          },
          {
            src: 'assets/techstack/chef_120_60.png',
            alt: 'Chef',
            width: '120px',
          },
          {
            src: 'assets/techstack/puppet_120_60.png',
            alt: 'Puppet',
            width: '150px',
          },
        ],
      },
    ],
    'relational-databases': [
      {
        heading: 'Empowering Growth with Engineered Data Intelligence',
        icons: [
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hadoop/hadoop-original.svg',
            alt: 'Hadoop',
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg',
            alt: 'Kafka',
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg',
            alt: 'Spark',
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cassandra/cassandra-original.svg',
            alt: 'Cassandra',
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg',
            alt: 'Elasticsearch',
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
            alt: 'MySQL',
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
            alt: 'PostgreSQL',
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
            alt: 'SQL Server',
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg',
            alt: 'Oracle DB',
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg',
            alt: 'MariaDB',
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg',
            alt: 'Salesforce',
          },
          {
            src: 'assets/techstack/sharepoint_120_60.png',
            alt: 'SharePoint',
          },
          {
            src: 'assets/techstack/servicenow_150_60.png',
            alt: 'ServiceNow',
            width: '150px',
          },
          {
            src: 'assets/techstack/dynamics_120_60.png',
            alt: 'Microsoft Dynamics',
            width: '120px',
          },
          {
            src: 'assets/techstack/powerbi_120_60.png',
            alt: 'Microsoft PowerBI',
            width: '120px',
          },
        ],
      },
    ],
  };

  getMachineLearningIcons(): TechIcon[] {
    return this.techContent['machine-learning'][0].icons;
  }

  ngOnInit() {
    // Initialize any required functionality
  }

  selectTab(selectedTab: TechTab) {
    this.tabs.forEach((tab) => (tab.isActive = tab.id === selectedTab.id));
  }
}
