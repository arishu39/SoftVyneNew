import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  OnDestroy,
} from '@angular/core';

interface TechIcon {
  src: string;
  alt: string;
  width?: string;
}

@Component({
  selector: 'app-tech-banner',
  templateUrl: './tech-banner.component.html',
  styleUrls: ['./tech-banner.component.scss'],
  standalone: false,
})
export class TechBannerComponent implements OnInit, OnChanges, OnDestroy {
  @Input() mainRoute: string = '';
  @Input() subRoute: string = '';

  techIcons: Record<string, TechIcon[]> = {
    'ai-machine-learning': [
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
        alt: 'Vertex AI',
        width: '120px',
      },
      {
        src: 'assets/techstack/hugging_face.png',
        alt: 'Hugging Face',
        width: '160px',
      },
    ],
    'full-stack-engineering': [
      { src: 'assets/techstack/RubyRails.png', alt: 'Ruby on Rails' },
      { src: 'assets/techstack/NET.png', alt: '.NET' },
      { src: 'assets/techstack/NETcore.png', alt: '.NET Core' },
      { src: 'assets/techstack/Node.js.png', alt: 'NodeJS' },
      { src: 'assets/techstack/Python.png', alt: 'Python' },
      { src: 'assets/techstack/Java.png', alt: 'JAVA' },
      { src: 'assets/techstack/Go.png', alt: 'Go' },
      { src: 'assets/techstack/PHP.png', alt: 'PHP' },
      { src: 'assets/techstack/Laravel.png', alt: 'Laravel' },
      { src: 'assets/techstack/Angular.png', alt: 'Angular' },
      { src: 'assets/techstack/React.png', alt: 'React' },
      { src: 'assets/techstack/Vue.js.png', alt: 'Vue.js' },
      { src: 'assets/techstack/JavaScript.png', alt: 'JavaScript' },
      { src: 'assets/techstack/HTML5.png', alt: 'HTML5' },
      { src: 'assets/techstack/TypeScript.png', alt: 'TypeScript' },
      {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg',
        alt: 'Flutter',
      },
      {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xamarin/xamarin-original.svg',
        alt: 'Xamarin',
      },
      {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ionic/ionic-original.svg',
        alt: 'Ionic',
      },
    ],
    'cloud-devops-automation': [
      { src: 'assets/techstack/Amazon_Web_Services_Logo.svg.png', alt: 'AWS' },
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
      { src: 'assets/techstack/mesos_logo.png', alt: 'MESOS', width: '150px' },
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
      { src: 'assets/techstack/chef_120_60.png', alt: 'Chef', width: '120px' },
      {
        src: 'assets/techstack/puppet_120_60.png',
        alt: 'Puppet',
        width: '150px',
      },
    ],
    'data-engineering-analytics': [
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
      { src: 'assets/techstack/sharepoint_120_60.png', alt: 'SharePoint' },
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
  };

  currentIcons: TechIcon[] = [];
  private animationInterval: any;
  duplicateIcons: TechIcon[] = [];

  ngOnInit() {
    this.updateIcons();
    this.startScrolling();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['mainRoute']) {
      this.updateIcons();
    }
  }

  ngOnDestroy() {
    if (this.animationInterval) {
      clearInterval(this.animationInterval);
    }
  }

  private updateIcons() {
    this.currentIcons = this.techIcons[this.mainRoute] || [];
    this.duplicateIcons = [...this.currentIcons, ...this.currentIcons];
  }

  private startScrolling() {
    if (this.animationInterval) {
      clearInterval(this.animationInterval);
    }
  }
}
